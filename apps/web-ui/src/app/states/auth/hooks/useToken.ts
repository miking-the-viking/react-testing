import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const useToken = () => {
  const ctx = useContext(AuthContext);

  return ctx;
};

export default useToken;
