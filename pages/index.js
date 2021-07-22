import Image from 'next/image';

import Layout from '../layout/Layout';
import map from '../public/bg/home_map_bg.png';
import styles from '../styles/pages/Index.module.scss';

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <Image
          src={map}
          layout="fixed"
          width={960}
          height={540}
          alt="home map"
        />
      </div>
    </Layout>
  );
}
