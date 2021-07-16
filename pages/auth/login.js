import { useState } from 'react';

import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Alert from '../../components/Alert';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../layout/Layout';
import image from '../../public/svg/igrave.svg';
import styles from '../../styles/pages/Login.module.scss';
import { validateLogin } from '../../utils/validateForm';

export default function Login() {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validate: validateLogin,
    onSubmit: onLogin,
  });
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);

  async function onLogin({ username, password }) {
    setError(null);
    try {
      await login(username, password);
      router.push('/');
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  }

  return (
    <Layout title="Login" plain>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1>Sekolah Skullers</h1>
          <Image src={image} width="700" height="550" alt="svg" />
        </div>
        <div className={styles.rightContent}>
          <h1>Login</h1>
          {error && <Alert msg={error} danger />}
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.formField}>
              <FormField
                label="NIM"
                type="text"
                id="username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                error={formik.errors.username}
              />
            </div>
            <div className={styles.formField}>
              <FormField
                className={styles.formField}
                label="Password"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.errors.password}
              />
            </div>
            <Link href="/auth/password_reset">Lupa password?</Link>
            <SubmitButton />
          </form>
          <p className={styles.question}>
            Belum punya akun? <Link href="/auth/register">Register</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
