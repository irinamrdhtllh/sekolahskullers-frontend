import axios from 'axios';
import Image from 'next/image';

import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';
import Layout from '../layout/Layout';
import igrave from '../public/images/igrave-black.svg';
import styles from '../styles/pages/Angkatan.module.scss';

export default function ClassYear({ classYear }) {
  return (
    <Layout title="Dashboard Angkatan">
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.profile}>
            <Image
              src="/angkatan/morpha.png"
              height="160"
              width="160"
              alt="image"
            />
            <div className={styles.details}>
              <h1>{classYear.name}</h1>
              <Image
                src={`/level/angkatan/${classYear.level?.display.toLowerCase()}.png`}
                height="25"
                width="100"
                alt={classYear.level?.display}
              />
              <div className={styles.bars}>
                <div className={styles.bar}>
                  <ProgressBar
                    health
                    progress="HP"
                    bar={classYear.health}
                    width={{ width: `${classYear.health}%` }}
                  />
                </div>
                <div className={styles.bar}>
                  <ProgressBar
                    exp
                    progress="XP"
                    bar={classYear.exp}
                    width={{ width: `${classYear.relative_exp}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          {
            <div className={styles.visionMission}>
              <div className={styles.vision}>
                <h1>Visi</h1>
                <p>{classYear.vision}</p>
              </div>
              <div className={styles.mission}>
                <h1>Makna Logo</h1>
                {classYear.missions?.map((mission, index) => (
                  <p key={index}>{mission}</p>
                ))}
              </div>
            </div>
          }
        </div>

        <div className={styles.rightContent}>
          <h1>Tugas Angkatan</h1>
          <div className={styles.tasks}>
            {classYear.tasks?.map((task, index) => (
              <TaskCard key={index} status={task} />
            ))}
          </div>
          <div className={styles.image}>
            <Image src={igrave} width="400" height="250" alt="svg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('api/class-year/');
  const classYear = response.data;

  if (!classYear) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      classYear,
    },
    revalidate: 10,
  };
}
