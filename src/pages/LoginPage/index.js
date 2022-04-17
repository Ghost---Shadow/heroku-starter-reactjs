import LoginBody from './components/LoginBody';
import { login } from './api';

function LoginPage() {
  return <LoginBody login={login} />;
}

export default LoginPage;
