import React from 'react';

import { AuthProvider } from '../hooks/useAuth';
import '../styles/main.scss';
import initFontAwesome from "./initFontAwesome";

initFontAwesome();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
