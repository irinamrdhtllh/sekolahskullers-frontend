import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Layout from '../../layout/Layout';
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
    <>
      <Layout>
        <form onSubmit={formik.handleSubmit}>
          <p>
            <label htmlFor="first_name">First name</label>
            <br />
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            {formik.errors.first_name && (
              <span>{formik.errors.first_name}</span>
            )}
          </p>
          <p>
            <label htmlFor="last_name">Last name</label>
            <br />
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            {formik.errors.last_name && <span>{formik.errors.last_name}</span>}
          </p>
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
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && <span>{formik.errors.email}</span>}
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
          <p>
            <label htmlFor="password2">Confirm password</label>
            <br />
            <input
              type="password"
              id="password2"
              name="password2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password2}
            />
            {formik.errors.password2 && <span>{formik.errors.password2}</span>}
          </p>
          <button type="submit">Submit</button>
        </form>
      </Layout>
    </>
  );
}
