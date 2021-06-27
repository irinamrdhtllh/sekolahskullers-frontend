import axios from 'axios';

export default function Students({ students }) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.username}>
          {student.first_name} {student.last_name}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const response = await axios.get('http://127.0.0.1:8000/api/students/');
  const students = response.data.results;

  return {
    props: { students },
  };
}
