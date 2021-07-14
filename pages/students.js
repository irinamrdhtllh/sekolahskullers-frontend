import axios from 'axios';

import Layout from '../layout/Layout';

export default function Students({ students }) {
  return (
    <Layout title="Dashboard Peserta">
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get('api/students/');
  const students = response.data.results;

  if (!students) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      students,
    },
    revalidate: 10,
  };
}
