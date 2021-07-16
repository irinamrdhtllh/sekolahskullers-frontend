import axios from 'axios';
import Image from 'next/image';

import ClassItem from '../components/ClassItem';
import Layout from '../layout/Layout';
import image from '../public/images/image.jpg';
import acute from '../public/svg/acute-black.svg';
import igrave from '../public/svg/igrave-black.svg';
import styles from '../styles/pages/Groups.module.scss';

export default function Groups({ groups }) {
  const health_style = {
    background: '#E90909',
    width: '100%',
  };
  const exp_style = {
    background: '#46D322',
    width: '70%',
  };

  return (
    <Layout title="Dashboard Kelas">
      <div className={styles.container}>
        <div className={styles.leaderboard}>
          <h1>Leaderboard</h1>
          <div className={styles.ship}>
            <Image src={acute} width="400" height="250" alt="svg" />
            <Image src={igrave} width="400" height="250" alt="svg" />
          </div>
        </div>
        <div className={styles.classItem}>
          {groups.map((group, index) => (
            <ClassItem
              key={index}
              number={index + 1}
              class_logo={image}
              class_name={group.name}
              level_logo={`/level/kelas/${group.level?.display}.png`}
              level={group.level?.display}
              health_bar={group.health}
              health_style={health_style}
              exp_bar={group.exp}
              exp_style={exp_style}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('api/groups/');
  const groups = response.data.results;

  if (!groups) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      groups,
    },
    revalidate: 10,
  };
}
