import axios from 'axios';
import { capitalCase } from 'change-case';
import Image from 'next/image';
import { useRouter } from 'next/router';

import StudentItem from '../components/StudentItem';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import acute from '../public/svg/acute-black.svg';
import igrave from '../public/svg/igrave-black.svg';
import styles from '../styles/pages/Students.module.scss';

export default function Students({ students, page }) {
  const router = useRouter();

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
        <div className={styles.studentItem}>
          <ul>
            {students?.map((student, index) => (
              <li key={index}>
                <StudentItem
                  leaderboard
                  src={image}
                  width="200"
                  height="200"
                  student={capitalCase(
                    `${student.first_name} ${student.last_name}`
                  )}
                />
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <button
              onClick={() => router.push(`/students/?page=${page - 1}`)}
              disabled={page <= 1}
            >
              Prev
            </button>
            <button onClick={() => router.push(`/students/?page=${page + 1}`)}>
              Next
            </button>
          </div>
        </div>
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
