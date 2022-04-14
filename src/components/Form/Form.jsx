import { useState } from 'react';
import fetchPost from '../../helpers/fetchPost';
import css from './Form.module.css';

function Form(props) {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const objToSend =
    props.formType === 'add skill'
      ? { title: firstValue, description: secondValue }
      : { email: firstValue, password: secondValue };

  async function submitHandler(e) {
    e.preventDefault();
    props.setActionFail(false);
    props.setActionSuccess(false);
    const serverResponse = await fetchPost(objToSend, props.fetchUrl);
    if (serverResponse) {
      props.setActionSuccess(true);
      props.loginHandler && props.loginHandler();
      return;
    }
    props.setActionFail(true);
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>{props.formType}</h1>
      <div>
        <label htmlFor=''>Email:</label>
        <input
          type='text'
          value={firstValue}
          onChange={(e) => {
            setFirstValue(e.target.value);
          }}
        />
        <label htmlFor=''>Password:</label>
        <input
          type='text'
          value={secondValue}
          onChange={(e) => {
            setSecondValue(e.target.value);
          }}
        />
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
