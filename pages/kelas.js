import { useState } from 'react';

import axios from 'axios';
import Image from 'next/image';

import ClassItem from '../components/ClassItem';
import Layout from '../layout/Layout';
import acute from '../public/images/acute-black.svg';
import igrave from '../public/images/igrave-black.svg';
import image from '../public/logo/sekolahskullers.png';
import styles from '../styles/pages/Kelas.module.scss';

export default function Groups({ groups }) {
  const [allTime, setAllTime] = useState(true);
  const [weekly, setWeekly] = useState(false);

  if (allTime) {
    groups.sort((firstitem, seconditem) => seconditem.exp - firstitem.exp);
  } else if (weekly) {
    groups.sort(
      (firstitem, seconditem) => seconditem.weekly_exp - firstitem.weekly_exp
    );
  }

  return (
    <Layout title="Dashboard Kelas">
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <h1>Leaderboard</h1>
          <div className={styles.tabs}>
            <button
              className={`${styles.button} ${allTime && styles.active}`}
              onClick={() => {
                setAllTime(true);
                setWeekly(false);
              }}
            >
              All Time
            </button>
            <button
              className={`${styles.button} ${weekly && styles.active}`}
              onClick={() => {
                setWeekly(true);
                setAllTime(false);
              }}
            >
              Weekly
            </button>
          </div>
          <div className={styles.ship}>
            <Image src={acute} width="400" height="250" alt="svg" />
            <Image src={igrave} width="400" height="250" alt="svg" />
          </div>
        </div>
        {allTime && (
          <div className={styles.classItem}>
            {groups.map((group, index) => (
              <ClassItem
                key={index}
                status={group}
                number={index + 1}
                class_logo={image}
              />
            ))}
          </div>
        )}
        {weekly && (
          <div className={styles.classItem}>
            {groups.map((group, index) => (
              <ClassItem
                weekly
                key={index}
                status={group}
                number={index + 1}
                class_logo={image}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('api/groups/');
  const groups = response.data.results;

  if (!groups) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      groups,
    },
    revalidate: 10,
  };
}
