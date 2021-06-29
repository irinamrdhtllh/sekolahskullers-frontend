import styles from '../styles/components/ProgressBar.module.scss';

export default function ProgressBar( name, progress ) {
  return (
    <div>
      <p>{name}</p>
      <div class='bar_holder'>
        <div class='bar'>{progress}</div>
      </div>
    </div>
  )
}
