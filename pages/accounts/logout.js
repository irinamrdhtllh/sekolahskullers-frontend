import { useState } from 'react';

import axios from 'axios';

export default function Logout() {
  const [token, setToken] = useState({ key: '', expiry: null });

  return (
    <>
      <input type="text" onChange={(e) => setToken({ key: e.target.value })} />
      <p>
        <button
          onClick={async () => {
            try {
              const response = await axios.post(
                'http://127.0.0.1:8000/api/auth/logoutall/',
                {},
                { headers: { Authorization: `Token ${token.key}` } }
              );
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Logout
        </button>
      </p>
    </>
  );
}
