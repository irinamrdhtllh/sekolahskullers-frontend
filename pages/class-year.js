import axios from 'axios';
import Image from 'next/image';

import Level from '../components/Level.js';
import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import styles from '../styles/pages/ClassYear.module.scss';

export default function ClassYear({ classYear }) {
  const bar_style1 = {
    background: '#E90909',
    width: '100%',
  };
  const bar_style2 = {
    background: '#46D322',
    width: '70%',
  };

  return (
    <Layout title="Dashboard Angkatan">
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
              <h1>{classYear.name}</h1>
              <Image
                src={`/level/angkatan/${classYear.level?.display.toLowerCase()}.png`}
                height="50"
                width="150"
                alt={classYear.level?.display}
              />
              <ProgressBar progress="HP" bar="100%" bar_style={bar_style1} />
              <ProgressBar progress="XP" bar="70%" bar_style={bar_style2} />
            </div>
          </div>
          <div className={styles.visionMission}>
            <div className={styles.vision}>
              <h1>Visi</h1>
              <p>{classYear.vision}</p>
            </div>
            <div className={styles.mission}>
              <h1>Misi</h1>
              <ul>
                {classYear.missions?.map((mission, index) => (
                  <li key={index}>{mission}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <h1>Tugas Angkatan</h1>
          {classYear.tasks?.map((task, index) => (
            <TaskCard key={index} status={task} />
          ))}
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
