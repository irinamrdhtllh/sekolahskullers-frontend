import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import StudentItem from '../components/StudentItem';
import Layout from '../layout/Layout';
import acute from '../public/images/acute-black.svg';
import igrave from '../public/images/igrave-black.svg';
import styles from '../styles/pages/Peserta.module.scss';

export default function Students({ students, pagesAvailable, page }) {
  const router = useRouter();

  return (
    <Layout title="Dashboard Peserta">
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <Link href="/leaderboard-peserta">Leaderboard Peserta &rarr;</Link>
          <div className={styles.wrapper}>
            <h1>Daftar Peserta</h1>
            <div className={styles.ship}>
              <Image src={acute} width="400" height="250" alt="svg" />
              <Image src={igrave} width="400" height="250" alt="svg" />
            </div>
          </div>
        </div>
        <div className={styles.studentItem}>
          <ul>
            {students?.map((student, index) => (
              <li key={index}>
                <StudentItem
                  leaderboard
                  status={student}
                  src={`/peserta/${student.username}.jpg`}
                  width="200"
                  height="200"
                />
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <button
              onClick={() => router.push(`/peserta/?page=${page - 1}`)}
              disabled={page <= 1}
            >
              <FontAwesomeIcon
                className={styles.icons}
                icon="less-than"
                size="lg"
              />
            </button>
            <button
              onClick={() => router.push(`/peserta/?page=${page + 1}`)}
              disabled={pagesAvailable == null}
            >
              <FontAwesomeIcon
                className={styles.icons}
                icon="greater-than"
                size="lg"
              />
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
  const pagesAvailable = response.data.next;

  if (!students) {
    return {
      notFound: true,
    };
  }

  return {
    students,
    pagesAvailable,
    page: parseInt(page, 10),
  };
};
