import { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from '../styles/components/Alert.module.scss';

export default function Alert({ msg, danger, success, link, linkTitle }) {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof msg === 'string') {
      setMessage(msg);
    } else {
      for (const key of Object.keys(msg)) {
        switch (key) {
          case 'username':
            setMessage('NIM telah digunakan');
            break;

          case 'detail':
            setMessage('NIM atau password salah');
            break;

          case 'email':
            setMessage('Email telah digunakan');
            break;

          default:
            throw new Error('Key not recognized');
        }
      }
    }
  }, []); // eslint-disable-line

  if (show) {
    return (
      <div
        className={`${styles.alert} ${danger && styles.danger} ${
          success && styles.success
        }`}
      >
        <span>
          {message}
          {link && <Link href={link}>{linkTitle}</Link>}
        </span>
        <span className={styles.closebtn} onClick={() => setShow(false)}>
          &times;
        </span>
      </div>
    );
  }

  return null;
}
