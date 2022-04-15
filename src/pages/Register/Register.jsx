import { useContext, useState } from 'react';
import AlreadyLoggedIn from '../../components/AlreadyLoggedIn/AlreadyLoggedIn';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import AuthContext from '../../store/AuthContext';
import LoadingPage from '../LoadingPage/LoadingPage';

function Register({ loading }) {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFail, setRegisterFail] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header headerType='authPage' />
          <Wrapper>
            {isLoggedIn ? (
              <AlreadyLoggedIn type='register' />
            ) : (
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
            )}
          </Wrapper>
        </>
      )}
    </div>
  );
}
export default Register;
