import StudentItem from '../../components/StudentItem.js';
import image from '../../public/images/image.jpg';

export default function StudentItemTest() {
  const student1 = "John Doe";

  const student2 = "Jane Doe";

  return (
    <>
      <StudentItem src={image} student={student1}/>
      <StudentItem src={image} student={student2}/>
      <StudentItem src={image} student={student1}/>
      <StudentItem src={image} student={student2}/>
    </>
  );
}
