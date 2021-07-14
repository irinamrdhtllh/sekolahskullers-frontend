import axios from 'axios';

import Layout from '../layout/Layout';

export default function Groups({ groups }) {
  return (
    <Layout title="Dashboard Kelas">
      <pre>{JSON.stringify(groups, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('api/groups/');
  const groups = response.data.results;

  if (!groups) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      groups,
    },
    revalidate: 10,
  };
}
