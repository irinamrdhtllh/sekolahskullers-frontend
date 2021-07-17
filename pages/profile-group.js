import { useEffect, useState } from 'react';

import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

import Level from '../components/Level.js';
import ProgressBar from '../components/ProgressBar';
import StudentItem from '../components/StudentItem';
import TaskCard from '../components/TaskCard';
import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import styles from '../styles/pages/ProfileGroup.module.scss';

export default function Profile() {
  const { response, loading } = useFetch(
    {
      method: 'GET',
      url: 'api/profile-group/',
    },
    true
  );
  const [group, setGroup] = useState({});

  useEffect(() => {
    if (!loading) {
      setGroup(response.data);
    }
  }, [loading]); // eslint-disable-line

  return (
    <Layout title="Profil Kelas">
      {loading ? (
        <div className={styles.loading}>
          <ClipLoader loading={loading} size={50} color="#244c4c" />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <div className={styles.profile}>
              <Image
                className={styles.image}
                src={image}
                height="160"
                width="160"
                alt="image"
              />
              <div className={styles.details}>
                <h1>{group.name}</h1>
                <Level
                  level_logo={`/level/kelas/${group.level?.display.toLowerCase()}.png`}
                  level={group.level?.display}
                />
                <div className={styles.bars}>
                  <div className={styles.bar}>
                    <ProgressBar
                      health
                      progress="HP"
                      bar={group.health}
                      width={{ width: '100%' }}
                    />
                  </div>
                  <div className={styles.bar}>
                    <ProgressBar
                      exp
                      progress="XP"
                      bar={group.exp}
                      width={{ width: '70%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupParticipant}>
              <h1>Anggota Kelas</h1>
              <ul className={styles.studentItem}>
                {group.students?.map((student, index) => (
                  <li key={index}>
                    <StudentItem
                      group
                      src={image}
                      width="150"
                      height="150"
                      student={student.first_name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.rightContent}>
            <h1>Tugas Kelas</h1>
            {group.task_statuses?.map((task_status, index) => (
              <TaskCard key={index} status={task_status} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
