import css from './SkillCard.module.css';

function SkillCard({ title, description }) {
  return (
    <div className={css.skillCard}>
      <h2 className={css.cardTitle}>{title}</h2>
      <p className={css.cardDescription}>{description}</p>
    </div>
  );
}

export default SkillCard;
