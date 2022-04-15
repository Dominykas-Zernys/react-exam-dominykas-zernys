import css from './SkillCards.module.css';

function SkillCards({ children }) {
  return <div className={css.skillCards}>{children}</div>;
}

export default SkillCards;
