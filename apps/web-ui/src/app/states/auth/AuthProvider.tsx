import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
