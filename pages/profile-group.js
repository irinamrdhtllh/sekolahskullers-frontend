import { useEffect, useState } from 'react';

import Image from 'next/image';

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

  const bar_hp = {
    background: '#E90909',
    width: '100%',
  };
  const bar_xp = {
    background: '#46D322',
    width: '70%',
  };

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
                  <h1>{group.name}</h1>
                  <Level level_logo={image} level={group.level?.display} />
                  <ProgressBar
                    progress="HP"
                    bar="100%"
                    bar_style={bar_hp}
                  />
                  <ProgressBar progress="XP" bar="70%" bar_style={bar_xp} />
                </div>
              </div>
              <div className={styles.groupParticipant}>
                <h1>Anggota Kelas</h1>
                {group.students?.map((student, index) => (
                  <StudentItem key={index} src={image} student={student.first_name}/>
                ))}
              </div>
            </div>

            <div className={styles.rightContent}>
              <h1>Tugas Kelas</h1>
              {group.task_statuses?.map((task_status, index) => (
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
