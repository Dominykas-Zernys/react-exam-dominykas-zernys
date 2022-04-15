import css from './AlreadyLoggedIn.module.css';
import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import { Link } from 'react-router-dom';

function AlreadyLoggedIn({ type }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className={css.flex}>
      <div className={css.loggedInWrapper}>
        {type === 'login' && (
          <p>
            You are already logged in. If you want to login with a different
            account, please
            <button className={css.button} onClick={logout}>
              logout
            </button>
            first. If you want to reach the homepage, click
            <Link className={css.button} to={'/'}>
              here.
            </Link>
          </p>
        )}
        {type === 'register' && (
          <p>
            You are logged in. If you want to register a new account, please
            <button className={css.button} onClick={logout}>
              logout
            </button>
            first. If you want to reach the homepage, click
            <Link className={css.button} to={'/'}>
              here.
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default AlreadyLoggedIn;
