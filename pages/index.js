import Image from 'next/image';

import Layout from '../layout/Layout';
import map from '../public/map_sekolahskullers.png';
import styles from '../styles/pages/Index.module.scss';

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <h1>Sekolah Skullers 2021</h1>
      </div>
    </Layout>
  );
}
