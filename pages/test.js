import React from 'react';
import Button from '../components/Button.js';
import ProgressBar from '../components/ProgressBar.js';
import FormField from '../components/FormField.js';
import StudentItem from '../components/StudentItem.js';
import ClassItem from '../components/ClassItem.js';

export default function Test() {
  const href = '/#';
  const name = 'Submit';

  const progress = "Keteknikfisikaan";
  const bar = "60%";

  const label = "First Name";
  const type = "text";

  const student = "Irina Mardhatillah";

  const number = "1";
  const class_name = "The Flying Dutchman";
  const level = "First Mate";
  const health = "100";
  const exp = "1000";

  return (
    <div>
      <Button href={href} name={name}/>
      <Button href={href} name={name}/>
      <ProgressBar progress={progress} bar={bar}/>
      <FormField label={label} type={type}/>
      <StudentItem student={student}/>
      <ClassItem
        number={number}
        class_name={class_name}
        class_name={class_name}
        level={level}
        health={health}
        exp={exp}
      />
    </div>
  );
}
