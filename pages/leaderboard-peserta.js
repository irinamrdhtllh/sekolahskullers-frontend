import { useState } from 'react';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import ClassItem from '../components/ClassItem';
import Layout from '../layout/Layout';
import acute from '../public/images/acute-black.svg';
import igrave from '../public/images/igrave-black.svg';
import styles from '../styles/pages/LeaderboardPeserta.module.scss';

export default function Students({ students }) {
  const [allTime, setAllTime] = useState(true);
  const [weekly, setWeekly] = useState(false);

  if (allTime) {
    students
      .sort((firstitem, seconditem) => seconditem.exp - firstitem.exp)
      .slice(10);
  } else if (weekly) {
    students
      .sort(
        (firstitem, seconditem) => seconditem.weekly_exp - firstitem.weekly_exp
      )
      .slice(10);
  }

  return (
    <Layout title="Dashboard Peserta">
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <Link href="/peserta">&larr; Daftar Peserta</Link>
          <div className={styles.wrapper}>
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
        </div>
        {allTime && (
          <div className={styles.studentList}>
            {students?.map((student, index) => (
              <ClassItem
                student
                key={index}
                status={student}
                number={index + 1}
                class_logo={`/peserta/${student.username}.jpg`}
              />
            ))}
          </div>
        )}
        {weekly && (
          <div className={styles.studentList}>
            {students.map((student, index) => (
              <ClassItem
                student
                weekly
                key={index}
                status={student}
                number={index + 1}
                class_logo={`/peserta/${student.username}.jpg`}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

Students.getInitialProps = async ({ query: { page = 1 } }) => {
  const response = await axios.get(`api/students/?page=${page}`);
  const students = response.data.results;

  if (!students) {
    return {
      notFound: true,
    };
  }

  return {
    students,
    page: parseInt(page, 10),
  };
};
