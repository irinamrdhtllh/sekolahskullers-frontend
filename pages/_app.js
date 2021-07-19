import React from 'react';

import '../styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faBars,
  faUser,
  faSchool,
  faLessThan,
  faGreaterThan,
} from '@fortawesome/free-solid-svg-icons';

import { AuthProvider } from '../hooks/useAuth';

library.add(
  fab,
  faInstagram,
  faTwitter,
  faGlobe,
  faBars,
  faUser,
  faSchool,
  faLessThan,
  faGreaterThan
);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
