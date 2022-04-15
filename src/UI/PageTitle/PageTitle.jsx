import css from './PageTitle.module.css';

function PageTitle({ title }) {
  return <h1 className={css.pageTitle}>{title}</h1>;
}

export default PageTitle;
