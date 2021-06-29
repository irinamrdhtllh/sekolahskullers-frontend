import styles from '../styles/components/StudentItem.module.scss';

export default function StudentItem({ image, name }) {
  return (
    <div>
      <img src={image} alt={name}/>
      <p>{name}</p>
    </div>
  )
}
