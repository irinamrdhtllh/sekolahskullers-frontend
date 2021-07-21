import { useState } from 'react';

import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BeatLoader } from 'react-spinners';

import Alert from '../../components/Alert';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../layout/Layout';
import image from '../../public/svg/acute.svg';
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
  const [failed, setFailed] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onRegister(values) {
    setFailed(null);
    setLoading(true);

    try {
      await registerUser(values);
      router.push('/');
    } catch (error) {
      setFailed({ type: Object.keys(error.response.data)[0], status: true });
    }

    setLoading(false);
  }

  return (
    <Layout title="Register" plain>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1>Register</h1>
          {failed?.status && <Alert page="register" type={failed.type} />}
          {loading && (
            <div className={styles.loader}>
              <BeatLoader loading={loading} color="white" />
            </div>
          )}
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.form}>
              <div className={styles.row}>
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
              </div>
              <div className={styles.row}>
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
              </div>
              <div className={styles.row}>
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
        <div className={styles.rightContent}>
          <h1>Sekolah Skullers</h1>
          <Image src={image} width="700" height="550" alt="svg" />
        </div>
      </div>
    </Layout>
  );
}
