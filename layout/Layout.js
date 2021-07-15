import Head from 'next/head';

import styles from '../styles/layout/Layout.module.scss';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title, plain }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} - Sekolah Skullers</title>
      </Head>
      {!plain && <Header />}
      <main className={styles.main}>{children}</main>
      {!plain && <Footer />}
    </>
  );
}
