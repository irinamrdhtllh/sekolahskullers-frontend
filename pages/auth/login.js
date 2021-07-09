import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import { useAuth } from '../../hooks/useAuth';
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

  async function onLogin({ username, password }) {
    try {
      await login(username, password);
      router.push('/');
    } catch (error) {
      console.error(error);
      // TODO: handle 401 error
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h1>Sekolah Skullers</h1>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.login}>
          <h1>Login</h1>
          <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
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
            <a href="#">Lupa password?</a>
            <SubmitButton />
          </form>
          <p className={styles.question}>
            Belum punya akun? <Link href="/auth/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
