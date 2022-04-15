import { useContext, useState } from 'react';
import fetchPost from '../../helpers/fetchPost';
import AuthContext from '../../store/AuthContext';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import css from './Form.module.css';

function Form(props) {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const { token } = useContext(AuthContext);

  const objToSend =
    props.formType === 'add skill'
      ? { title: firstValue, description: secondValue }
      : { email: firstValue, password: secondValue };

  async function submitHandler(e) {
    e.preventDefault();
    props.setActionFail(false);
    props.setActionSuccess(false);
    if (firstValue.length === 0 || secondValue.length === 0)
      return props.setActionFail(true);
    const serverResponse = await fetchPost(
      objToSend,
      props.fetchUrl,
      token && token
    );
    if (serverResponse) {
      props.setActionSuccess(true);
      props.loginHandler && props.loginHandler(serverResponse.token);
      return;
    }
    props.setActionFail(true);
  }

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <h1 className={css.formTitle}>{props.formType}</h1>
      <div className={css.inputsWrapper}>
        <label className={css.label} htmlFor=''>
          {props.formType === 'add skill' ? 'Title:' : 'Email:'}
        </label>
        <input
          className={css.input}
          type={props.formType === 'add skill' ? 'text:' : 'email'}
          value={firstValue}
          onChange={(e) => {
            props.setActionFail(false);
            props.setActionSuccess(false);
            setFirstValue(e.target.value);
          }}
        />
        <label className={css.label} htmlFor=''>
          {props.formType === 'add skill' ? 'Description:' : 'Password:'}
        </label>
        {props.formType === 'add skill' ? (
          <textarea
            className={css.input}
            value={secondValue}
            onChange={(e) => {
              props.setActionFail(false);
              props.setActionSuccess(false);
              setSecondValue(e.target.value);
            }}
            cols='30'
            rows='5'
          ></textarea>
        ) : (
          <input
            className={css.input}
            type='text'
            value={secondValue}
            onChange={(e) => {
              props.setActionFail(false);
              props.setActionSuccess(false);
              setSecondValue(e.target.value);
            }}
          />
        )}
      </div>
      <SubmitButton buttonTitle={props.formType} />
      <div className={css.infoTextWrapper}>
        {props.actionSuccess && (
          <h3 className={`${css.greenText} ${css.infoText}`}>
            {props.successMsg}
          </h3>
        )}
        {props.actionFail && (
          <h3 className={`${css.redText} ${css.infoText}`}>{props.failMsg}</h3>
        )}
      </div>
    </form>
  );
}

export default Form;
