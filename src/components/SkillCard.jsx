import css from './SkillCard.module.css';

function SkillCard({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;
