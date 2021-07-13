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
    background: "#EBBA78",
    width: "50%",
  }

  const bar_style2 = {
    background: "#80D5AD",
    width: "70%",
  }

  const bar_style3 = {
    background: "#CDCDC2",
    width: "60%",
  }

  const bar_style4 = {
    background: "#888888",
    width: "80%",
  }

  const bar_style5 = {
    background: "#8CD3FF",
    width: "70%",
  }

  const bar_style6 = {
    background: "#A5A6F6",
    width: "90%",
  }
  const bar_style7 = {
    background: "#FFC0C0",
    width: "80%",
  }

  return (
    <>
      <Layout>
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
                  <h1>{student.first_name} {student.last_name}</h1>
                  <Level level_logo={image} level={student.level?.display} />
                  <ProgressBar
                    progress="HP"
                    bar="100%"
                    bar_style={bar_hp}
                  />
                  <ProgressBar progress="XP" bar="70%" bar_style={bar_xp} />
                </div>
              </div>
              <div className={styles.assessment}>
                <h1>Detail Nilai</h1>
                <ProgressBar
                  progress="Kepemimpinan"
                  bar="50%"
                  bar_style={bar_style1}
                />
                <ProgressBar
                  progress="Keteknikfisikaan"
                  bar="70%"
                  bar_style={bar_style2}
                />
                <ProgressBar
                  progress="Kemahasiswaan"
                  bar="60%"
                  bar_style={bar_style3}
                />
                <ProgressBar
                  progress="Solidaritas"
                  bar="80%"
                  bar_style={bar_style4}
                />
                <ProgressBar
                  progress="Kolaboratif"
                  bar="70%"
                  bar_style={bar_style5}
                />
                <ProgressBar
                  progress="Semangat Menjelajah"
                  bar="90%"
                  bar_style={bar_style6}
                />
                <ProgressBar
                  progress="Semangat Memaknai"
                  bar="80%"
                  bar_style={bar_style7}
                />
              </div>
            </div>

            <div className={styles.rightContent}>
              <h1>Tugas Peserta</h1>
              {student.task_statuses?.map((task_status, index) => (
                <TaskCard
                  key={index}
                  task_name={task_status.task}
                  max_exp={task_status.max_score}
                  exp={task_status.score}
                  deadline={(new Date(task_status.deadline)).toDateString()}
                  href={task_status.link}
                />
              ))}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
