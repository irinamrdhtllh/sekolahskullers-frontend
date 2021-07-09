import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';

import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles/pages/Register.module.scss';
import { validateRegister } from '../../utils/validateForm';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password2: '',
    },
    validate: validateRegister,
    onSubmit: onRegister,
  });
  const { registerUser } = useAuth();
  const router = useRouter();

  async function onRegister(values) {
    try {
      await registerUser(values);
      router.push('/');
    } catch (error) {
      console.error(error);
      // TODO: handle 401 error
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.register}>
          <h1>Register</h1>
          <form className={styles.registerForm} onSubmit={formik.handleSubmit}>
            <div className={styles.form}>
              <div className={styles.rightForm}>
                <div className={styles.formField}>
                  <FormField
                    label="First name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    error={formik.errors.first_name}
                  />
                </div>
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
              </div>
              <div className={styles.leftForm}>
                <div className={styles.formField}>
                  <FormField
                    label="Last name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    error={formik.errors.last_name}
                  />
                </div>
                <div className={styles.formField}>
                  <FormField
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.errors.email}
                  />
                </div>
                <div className={styles.formField}>
                  <FormField
                    label="Confirm password"
                    type="password"
                    id="password2"
                    name="password2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password2}
                    error={formik.errors.password2}
                  />
                </div>
              </div>
            </div>
            <SubmitButton />
          </form>
          <p className={styles.question}>
            Sudah punya akun? <Link href="/auth/login">Login</Link>
          </p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <h1>Sekolah Skullers</h1>
      </div>
    </div>
  );
}
