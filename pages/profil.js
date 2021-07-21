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
import igrave from '../public/svg/igrave-black.svg';
import styles from '../styles/pages/Profil.module.scss';

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
          <ClipLoader loading={loading} size={50} color="#EBBA78" />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <div className={styles.profile}>
              <Image src={image} height="160" width="160" alt="image" />
              <div className={styles.details}>
                <h1>
                  {student.first_name} {student.last_name}
                </h1>
                <Level
                  level_logo={`/level/peserta/${student.level?.display.toLowerCase()}.png`}
                  level={student.level?.display}
                />
                <div className={styles.attr}>
                  <div className={styles.gold}>
                    <Image
                      src="/icon/gold-point.png"
                      height="25"
                      width="25"
                      alt="gold"
                    />
                    <p>{student.gold} GP</p>
                  </div>
                  <div className={styles.potion}>
                    <Image
                      src="/icon/health-potion.png"
                      height="30"
                      width="30"
                      alt="gold"
                    />
                    <p>{student.potion} Potion</p>
                  </div>
                </div>
                <div className={styles.bars}>
                  <div className={styles.bar}>
                    <ProgressBar
                      health
                      progress="HP"
                      bar={student.health}
                      width={{ width: `${student.health}%` }}
                    />
                  </div>
                  <div className={styles.bar}>
                    <ProgressBar
                      exp
                      progress="XP"
                      bar={student.exp}
                      width={{ width: `${student.relative_exp}%` }}
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
                    profile
                    key={index}
                    assessment={assessment.key}
                    progress={capitalCase(assessment.key)}
                    bar={assessment.value}
                    width={{ width: `${assessment.value}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.tasks}>
              <h1>Tugas Peserta</h1>
              {student.task_statuses?.map((task_status, index) => (
                <TaskCard key={index} status={task_status} />
              ))}
            </div>
            <div className={styles.image}>
              <Image src={igrave} width="400" height="250" alt="svg" />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
