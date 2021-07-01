import StudentItem from '../../components/StudentItem.js';

export default function StudentItemTest() {
  const student1 = "John Doe";
  const student2 = "Jane Doe";

  return (
    <>
      <StudentItem student={student1}/>
      <StudentItem student={student2}/>
      <StudentItem student={student1}/>
      <StudentItem student={student2}/>
    </>
  );
}
