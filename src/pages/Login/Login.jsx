import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import AuthContext from '../../store/AuthContext';

function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const { login } = useContext(AuthContext);
  const history = useHistory();

  function loginHandler(token) {
    login(token);
    setTimeout(() => {
      history.push('/');
    }, 2000);
  }

  return (
    <div>
      <Header headerType='authPage' />
      <Wrapper>
        <Form
          formType='login'
          fetchUrl='v1/auth/login'
          setActionFail={setLoginFail}
          setActionSuccess={setLoginSuccess}
          actionSuccess={loginSuccess}
          actionFail={loginFail}
          loginHandler={loginHandler}
          successMsg='Login successful!'
          failMsg='Login failed. Make sure you enter correct email and password.'
        />
      </Wrapper>
    </div>
  );
}

export default Login;
