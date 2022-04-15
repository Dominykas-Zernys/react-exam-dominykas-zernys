import css from './LoadingElement.module.css';

function LoadingElement({ loadingText, pageTitle }) {
  return (
    <div className={css.loadingElWrapper}>
      <div className={css.loadingEl}>{loadingText}</div>;
    </div>
  );
}

export default LoadingElement;
