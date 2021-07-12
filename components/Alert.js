import { useEffect, useState } from 'react';

import styles from '../styles/components/Alert.module.scss';


export default function Alert({ msg }) {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    for (const key of Object.keys(msg)) {
      if (key === 'detail') {
        setMessage('NIM atau password salah');
      } else if (key === 'email') {
        setMessage('Email telah digunakan');
      }
    }
  }, []); // eslint-disable-line

  if (show) {
    return (
      <div className={styles.alert}>
        {message}
        <span className={styles.closebtn} onClick={() => setShow(false)}>&times;</span>
      </div>
    );
  }

  return null;
}
