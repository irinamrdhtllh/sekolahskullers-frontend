import axios from 'axios';
import Image from 'next/image';

import StudentItem from '../components/StudentItem';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import acute from '../public/svg/acute-black.svg';
import igrave from '../public/svg/igrave-black.svg';
import styles from '../styles/pages/Students.module.scss';

export default function Students({ students }) {
  return (
    <Layout title="Dashboard Peserta">
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <h1>Leaderboard</h1>
          <div className={styles.ship}>
            <Image src={acute} width="400" height="250" alt="svg" />
            <Image src={igrave} width="400" height="250" alt="svg" />
          </div>
        </div>
        <ul className={styles.studentItem}>
          {students.map((student, index) => (
            <li key={index}>
              <StudentItem
                leaderboard
                src={image}
                width="200"
                height="200"
                student={student.first_name}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('api/students/');
  const students = response.data.results;

  if (!students) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      students,
    },
    revalidate: 10,
  };
}
