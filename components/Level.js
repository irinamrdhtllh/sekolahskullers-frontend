import styles from '../styles/components/Level.module.scss';

export default function Level( level_logo, level ) {
  return (
    <div>
      <img src={level_logo}/>
      <p>{level}</p>
    </div>
  )
}
