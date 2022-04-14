import { useContext, useState } from 'react';
import fetchPost from '../../helpers/fetchPost';
import AuthContext from '../../store/AuthContext';
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
    if (!firstValue.length || !secondValue.length)
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
    <form onSubmit={submitHandler}>
      <h1>{props.formType}</h1>
      <div>
        <label htmlFor=''>
          {props.formType === 'add skill' ? 'Title:' : 'Email:'}
        </label>
        <input
          type={props.formType === 'add skill' ? 'text:' : 'email'}
          value={firstValue}
          onChange={(e) => {
            setFirstValue(e.target.value);
          }}
        />
        <label htmlFor=''>
          {props.formType === 'add skill' ? 'Description:' : 'Password:'}
        </label>
        {props.formType === 'add skill' ? (
          <textarea
            value={secondValue}
            onChange={(e) => {
              setSecondValue(e.target.value);
            }}
            cols='30'
            rows='10'
          ></textarea>
        ) : (
          <input
            type='text'
            value={secondValue}
            onChange={(e) => {
              setSecondValue(e.target.value);
            }}
          />
        )}
      </div>
      <button>{props.formType}</button>
      <div>
        <h2>
          {props.actionSuccess && props.successMsg}
          {props.actionFail && props.failMsg}
        </h2>
      </div>
    </form>
  );
}

export default Form;
