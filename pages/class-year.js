import { useEffect, useState } from 'react';

import Image from 'next/image';

import Level from '../components/Level.js';
import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';
import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import styles from '../styles/pages/ClassYear.module.scss';

export default function ClassYear() {
  const { response, loading } = useFetch({
    method: 'GET',
    url: 'class-year/',
  });
  const [classYear, setClassYear] = useState([]);

  useEffect(() => {
    if (!loading) {
      setClassYear(response.data);
    }
  }, [loading]); // eslint-disable-line

  const bar_style1 = {
    background: '#E90909',
    width: '100%',
  };
  const bar_style2 = {
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
                  <h1>{classYear.name}</h1>
                  <Level
                    level_logo={`/level/angkatan/${classYear.level?.display}.png`}
                    level={classYear.level?.display}
                  />
                  <ProgressBar
                    progress="HP"
                    bar="100%"
                    bar_style={bar_style1}
                  />
                  <ProgressBar progress="XP" bar="70%" bar_style={bar_style2} />
                </div>
              </div>
              <div className="visionMission">
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
                <TaskCard
                  key={index}
                  task_name={task.name}
                  max_exp={task.max_score}
                  exp={task.score}
                  deadline={new Date(task.deadline).toDateString()}
                  href={task.link}
                />
              ))}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
