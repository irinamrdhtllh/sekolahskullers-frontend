import { useEffect, useState } from 'react';

import Image from 'next/image';

import Level from '../components/Level.js';
import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';
import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import styles from '../styles/pages/Profile.module.scss';

export default function Profile() {
  const { response, loading } = useFetch(
    {
      method: 'GET',
      url: 'api/profile/',
    },
    true
  );
  const [student, setStudent] = useState({});

  useEffect(() => {
    if (!loading) {
      setStudent(response.data);
    }
  }, [loading]); // eslint-disable-line

  const bar_hp = {
    background: '#E90909',
    width: '100%',
  };
  const bar_xp = {
    background: '#46D322',
    width: '70%',
  };

  const bar_style1 = {
    background: '#EBBA78',
    width: '50%',
  };

  const bar_style2 = {
    background: '#80D5AD',
    width: '70%',
  };

  const bar_style3 = {
    background: '#CDCDC2',
    width: '60%',
  };

  const bar_style4 = {
    background: '#888888',
    width: '80%',
  };

  const bar_style5 = {
    background: '#8CD3FF',
    width: '70%',
  };

  const bar_style6 = {
    background: '#A5A6F6',
    width: '90%',
  };
  const bar_style7 = {
    background: '#FFC0C0',
    width: '80%',
  };

  return (
    <Layout title="Profil">
      {loading ? (
        <p>Loading</p>
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
                <h1>
                  {student.first_name} {student.last_name}
                </h1>
                <Level
                  level_logo={`/level/peserta/${student.level?.display.toLowerCase()}.png`}
                  level={student.level?.display}
                />
                <div className={styles.bars}>
                  <div className={styles.bar}>
                    <ProgressBar
                      health
                      progress="HP"
                      bar={student.health}
                      width={{ width: '100%' }}
                    />
                  </div>
                  <div className={styles.bar}>
                    <ProgressBar
                      exp
                      progress="XP"
                      bar={student.exp}
                      width={{ width: '70%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.assessment}>
              <h1>Detail Nilai</h1>
              {student.assessment?.map((assessment, index) => (
                <div key={index} className={styles.bar}>
                  <ProgressBar
                    key={index}
                    assessment={assessment.key}
                    progress={assessment.key}
                    bar={assessment.value}
                    width={{ width: '80%' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContent}>
            <h1>Tugas Peserta</h1>
            {student.task_statuses?.map((task_status, index) => (
              <TaskCard key={index} status={task_status} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
