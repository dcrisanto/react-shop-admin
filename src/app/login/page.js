'use client';
import { useAuth } from '@hooks/useAuth';
import LoginPage from '@pages/LoginPage';

const Login = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
