import styles from '../styles/components/ClassItem.module.scss';

export default function ClassItem({ image, name, level_logo, level, health, exp }) {
  return (
    <div>
      <img src={image}/>
      <h1>{name}</h1>
      <div class='level'>
        <img src={level_logo}/>
        <h2>{level}</h2>
      </div>
      <div class='bar'>
        <p>HP: {health}</p>
        <p>XP: {exp}</p>
      </div>
    </div>
  )
}
