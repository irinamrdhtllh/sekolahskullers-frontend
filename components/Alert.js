import { useEffect, useState } from 'react';

import styles from '../styles/components/Alert.module.scss';

export default function Alert({ page, type, success }) {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    switch (page) {
      case 'register':
        if (type === 'username') {
          setMessage('NIM telah digunakan');
        } else if (type === 'email') {
          setMessage('Email telah digunakan');
        }
        break;

      case 'login':
        if (type === 'detail') {
          setMessage('NIM atau password salah');
        }
        break;

      case 'reset':
        success
          ? setMessage(
              'Email reset password telah dikirim. Jika tidak muncul dalam beberapa menit, cek folder spam'
            )
          : setMessage('Email tidak terdaftar pada peserta manapun');
        break;

      case 'confirm':
        if (success) {
          setMessage('Password berhasil diubah');
        } else if (type === 'uid') {
          setMessage('UID atau token tidak valid');
        }
        break;

      default:
        throw new Error('Type not recognized');
    }
  }, []); // eslint-disable-line

  if (show) {
    return (
      <div
        className={`${styles.alert} ${
          success ? styles.success : styles.danger
        }`}
      >
        {message}
        <span className={styles.closebtn} onClick={() => setShow(false)}>
          &times;
        </span>
      </div>
    );
  }

  return null;
}
