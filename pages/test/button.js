import Button from '../../components/Button';

export default function button() {
  return (
    <>
      <Button href="/auth/login" name="Login" />
      <Button href="/auth/register" name="Register" width={'500px'} />
    </>
  );
}
