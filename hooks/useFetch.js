import { useEffect, useState } from 'react';

import axios from 'axios';

import { useAuth } from './useAuth';

export default function useFetch(config, auth = false) {
  const { getToken, loading: authLoading } = useAuth();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const call = async () => {
      setLoading(true);

      if (authLoading) {
        console.log('Wait for auth to finish..');
        return;
      }

      let newConfig = config;
      if (auth) {
        newConfig = {
          ...config,
          headers: {
            Authorization: 'Bearer ' + (await getToken()),
          },
        };
      }

      axios(newConfig)
        .then((response) => setResponse(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    call();
  }, [authLoading]); // eslint-disable-line

  return { response, error, loading };
}
