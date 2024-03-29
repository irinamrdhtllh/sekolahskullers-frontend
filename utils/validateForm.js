export function validateRegister(values) {
  const errors = {};

  if (!values.first_name) {
    errors.first_name = 'Required';
  }

  if (!values.last_name) {
    errors.last_name = 'Required';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length !== 8) {
    errors.username = 'Must be 8 characters';
  } else if (!/^133/i.test(values.username)) {
    errors.username = "Must start with '133'";
  } else if (!/^[0-9]+$/i.test(values.username)) {
    errors.username = 'Must only contain numbers';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.password2) {
    errors.password2 = 'Required';
  }

  if (values.password !== values.password2 && values.password2) {
    errors.password2 = 'Password should match';
  }

  return errors;
}

export function validateLogin(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length !== 8) {
    errors.username = 'Must be 8 characters';
  } else if (!/^133/i.test(values.username)) {
    errors.username = "Must start with '133'";
  } else if (!/^[0-9]+$/i.test(values.username)) {
    errors.username = 'Must only contain numbers';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
}

export function validateReset({ email }) {
  const errors = {};

  if (!email) {
    errors.email = 'Required';
  }

  return errors;
}

export function validateConfirm({ newPassword1, newPassword2 }) {
  const errors = {};

  if (!newPassword1) {
    errors.newPassword1 = 'Required';
  }

  if (!newPassword2) {
    errors.newPassword2 = 'Required';
  }

  if (newPassword1 !== newPassword2 && newPassword2) {
    errors.newPassword2 = 'Kedua password harus sama';
  }

  return errors;
}
