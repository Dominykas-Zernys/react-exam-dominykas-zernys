import css from './Wrapper.module.css';

function Wrapper({ children }) {
  return <div className={css.wrapper}>{children}</div>;
}

export default Wrapper;
