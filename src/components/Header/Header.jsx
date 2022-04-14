import { NavLink } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import css from './Header.module.css';

function Header({ headerType }) {
  return (
    <header className={css.header}>
      <Wrapper>
        <div className={css.flexContainer}>
          <img src='img/logo.svg' alt='' />
          {headerType === 'authPage' && (
            <nav className={css.navigation}>
              <NavLink to={'/login'}>Login</NavLink>
              <NavLink to={'/register'}>Register</NavLink>
            </nav>
          )}
          {headerType === 'contentPage' && (
            <nav className={css.navigation}>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/add'}>Add</NavLink>
            </nav>
          )}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
