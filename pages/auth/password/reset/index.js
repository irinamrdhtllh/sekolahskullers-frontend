import { useState } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import Image from 'next/image';

import Alert from '../../../../components/Alert';
import FormField from '../../../../components/FormField';
import SubmitButton from '../../../../components/SubmitButton';
import Layout from '../../../../layout/Layout';
import image from '../../../../public/svg/icircumflex.svg';
import styles from '../../../../styles/pages/PasswordReset.module.scss';
import { validateReset } from '../../../../utils/validateForm';

export default function PasswordReset() {
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: { email: '' },
    validate: validateReset,
    onSubmit,
  });

  async function onSubmit({ email }) {
    try {
      await axios.post('auth/password/reset/', { email });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout title="Reset Password" plain>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1>Sekolah Skullers</h1>
          <Image
            src={image}
            width="600"
            height="450"
            alt="svg"
          />
        </div>
        <div className={styles.rightContent}>
          <h1>Reset Password</h1>
          {success && (
            <Alert
              msg="Email reset password telah dikirim. Jika tidak muncul dalam beberapa menit, cek folder spam"
              success
            />
          )}
          <p>
            Masukkan email yang terdaftar di akunmu agar memperoleh link reset
            password.
          </p>
          <form onSubmit={formik.handleSubmit}>
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
            <SubmitButton />
          </form>
        </div>
      </div>
    </Layout>
  );
}
