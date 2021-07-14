import Head from 'next/head';

import styles from '../styles/layout/Layout.module.scss';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title, plain }) {
  return (
    <>
      <Head>
        <title>{title} - Sekolah Skullers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!plain && <Header />}
      <main className={styles.main}>{children}</main>
      {!plain && <Footer />}
    </>
  );
}
