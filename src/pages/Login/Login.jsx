import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AlreadyLoggedIn from '../../components/AlreadyLoggedIn/AlreadyLoggedIn';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import AuthContext from '../../store/AuthContext';
import LoadingPage from '../LoadingPage/LoadingPage';

function Login({ loading }) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const { isLoggedIn, login } = useContext(AuthContext);
  const history = useHistory();

  function loginHandler(token) {
    login(token);
    history.push('/');
  }

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header headerType='authPage' />
          <Wrapper>
            {isLoggedIn ? (
              <AlreadyLoggedIn type='login' />
            ) : (
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
            )}
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default Login;
