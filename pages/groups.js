import { useState } from 'react';

import axios from 'axios';
import Image from 'next/image';

import ClassItem from '../components/ClassItem';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import acute from '../public/svg/acute-black.svg';
import igrave from '../public/svg/igrave-black.svg';
import styles from '../styles/pages/Groups.module.scss';

export default function Groups({ groups }) {
  const [show, setShow] = useState(true);

  return (
    <Layout title="Dashboard Kelas">
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <h1>Leaderboard</h1>
          <div className={styles.tabs}>
            <button onClick={() => setShow(true)}>All Time</button>
            <button onClick={() => setShow(false)}>Weekly</button>
          </div>
          <div className={styles.ship}>
            <Image src={acute} width="400" height="250" alt="svg" />
            <Image src={igrave} width="400" height="250" alt="svg" />
          </div>
        </div>
        {show && (
          <div className={styles.classItem}>
            {groups.map((group, index) => (
              <ClassItem
                key={index}
                status={group}
                number={index + 1}
                class_logo={image}
                health="100%"
                exp="70%"
              />
            ))}
          </div>
        )}
        {!show && (
          <div className={styles.classItem}>
            <p>Weekly Leaderboard</p>
            {groups.map((group, index) => (
              <ClassItem
                key={index}
                status={group}
                number={index + 1}
                class_logo={image}
                health="100%"
                exp="70%"
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
