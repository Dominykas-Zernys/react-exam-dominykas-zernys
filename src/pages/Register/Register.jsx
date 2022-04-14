import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';

function Register() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFail, setRegisterFail] = useState(false);

  return (
    <div>
      <Header headerType='authPage' />
      <Wrapper>
        <Form
          formType='register'
          fetchUrl='v1/auth/register'
          setActionFail={setRegisterFail}
          setActionSuccess={setRegisterSuccess}
          actionSuccess={registerSuccess}
          actionFail={registerFail}
          successMsg='Registered successfully! You can now login.'
          failMsg='Register failed. Make sure you enter valid email and password.'
        />
      </Wrapper>
    </div>
  );
}
export default Register;
