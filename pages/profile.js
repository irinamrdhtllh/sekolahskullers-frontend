import { useEffect, useState } from 'react';

import { capitalCase } from 'change-case';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

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

  return (
    <Layout title="Profil">
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
                    progress={capitalCase(assessment.key)}
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
