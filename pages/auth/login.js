import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Layout from '../../layout/Layout';
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
    <>
      <Layout>
        <form onSubmit={formik.handleSubmit}>
          <p>
            <label htmlFor="username">NIM</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.errors.username && <span>{formik.errors.username}</span>}
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && <span>{formik.errors.password}</span>}
          </p>
          <button type="submit">Submit</button>
        </form>
      </Layout>
    </>
  );
}
