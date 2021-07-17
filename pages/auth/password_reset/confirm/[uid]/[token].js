import { useState } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BeatLoader } from 'react-spinners';

import Alert from '../../../../../components/Alert';
import FormField from '../../../../../components/FormField';
import SubmitButton from '../../../../../components/SubmitButton';
import Layout from '../../../../../layout/Layout';
import image from '../../../../../public/svg/eth.svg';
import styles from '../../../../../styles/pages/PasswordResetConfirm.module.scss';
import { validateConfirm } from '../../../../../utils/validateForm';

export default function PasswordResetConfirm() {
  const router = useRouter();
  const { uid, token } = router.query;
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(null);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: { newPassword1: '', newPassword1: '' },
    validate: validateConfirm,
    onSubmit,
  });

  async function onSubmit({ newPassword1, newPassword2 }) {
    setSuccess(false);
    setFailed(null);
    setLoading(true);

    try {
      await axios.post(`auth/password_reset/confirm/${uid}/${token}/`, {
        new_password1: newPassword1,
        new_password2: newPassword2,
      });
      setSuccess(true);
    } catch (error) {
      setFailed({ type: Object.keys(error.response.data)[0], status: true });
    }

    setLoading(false);
  }

  return (
    <Layout title="Reset Password" plain>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1>Reset Password</h1>
          {success && <Alert page="confirm" success />}
          {failed?.status && <Alert page="confirm" type={failed.type} />}
          {loading && (
            <div className={styles.loader}>
              <BeatLoader loading={loading} color="#244c4c" />
            </div>
          )}
          <p>Masukkan password baru.</p>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.formField}>
              <FormField
                label="Password"
                type="password"
                id="newPassword1"
                name="newPassword1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword1}
                error={formik.errors.newPassword1}
              />
            </div>
            <div className={styles.formField}>
              <FormField
                label="Confirm password"
                type="password"
                id="newPassword2"
                name="newPassword2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword2}
                error={formik.errors.newPassword2}
              />
            </div>
            <SubmitButton />
          </form>
        </div>
        <div className={styles.rightContent}>
          <h1>Sekolah Skullers</h1>
          <Image src={image} width="600" height="450" alt="svg" />
        </div>
      </div>
    </Layout>
  );
}
