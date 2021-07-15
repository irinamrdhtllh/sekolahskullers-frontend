import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/components/TaskCard.module.scss';

export default function TaskCard({ status }) {
  const deadline = new Date(status.deadline);

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const day = days[deadline.getDay()];
  const date = deadline.getDate();
  const month = months[deadline.getMonth()];
  const year = deadline.getFullYear();
  const hours = deadline.getHours();
  const minutes = deadline.getMinutes();

  const dateString = `${day}, ${date} ${month} ${year}`;
  const timeString = `${hours}:${minutes}`;

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h3>{status.name}</h3>
        <div className={styles.info}>
          <div>
            <div>{dateString}</div>
            <div>{timeString}</div>
          </div>
          <a href={status.link}>
            <FontAwesomeIcon icon="school" size="1x" />
            <span>Classroom</span>
          </a>
        </div>
      </div>
      <div className={styles.score}>
        <div>{status.score}</div>
        <div>{status.max_score}</div>
      </div>
    </div>
  );
}
