import FormField from '../../components/FormField.js';

export default function FormFieldTest() {
  const label1 = "Username";
  const type1 = "text";
  const label2 = "Password";
  const type2 = "password";

  return (
    <>
      <FormField label={label1} type={type1}/>
      <FormField label={label2} type={type2}/>
    </>
  );
}
