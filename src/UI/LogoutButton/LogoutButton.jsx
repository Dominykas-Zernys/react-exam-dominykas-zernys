import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import css from './LogoutButton.module.css';

function LogoutButton() {
  const { logout } = useContext(AuthContext);

  return (
    <button className={css.logoutBtn} onClick={logout}>
      Logout
    </button>
  );
}

export default LogoutButton;
