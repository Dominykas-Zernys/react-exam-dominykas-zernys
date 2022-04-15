import css from './SubmitButton.module.css';

function SubmitButton({ buttonTitle }) {
  return <button className={css.submitBtn}>{buttonTitle}</button>;
}

export default SubmitButton;
