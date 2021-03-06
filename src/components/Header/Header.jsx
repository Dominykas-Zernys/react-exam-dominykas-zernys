import { NavLink } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import css from './Header.module.css';

function Header({ headerType }) {
  const addActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive');

  return (
    <header className={css.header}>
      <Wrapper>
        <div className={css.flexContainer}>
          <img src='img/logo.svg' alt='' />
          {headerType === 'authPage' && (
            <nav className={css.navigation}>
              <NavLink className={addActiveClass} to={'/login'}>
                Login
              </NavLink>
              <NavLink className={addActiveClass} to={'/register'}>
                Register
              </NavLink>
            </nav>
          )}
          {headerType === 'contentPage' && (
            <nav className={css.navigation}>
              <NavLink exact className={addActiveClass} to={'/'}>
                Home
              </NavLink>
              <NavLink className={addActiveClass} to={'/add'}>
                Add
              </NavLink>
            </nav>
          )}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
