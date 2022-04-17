import SignupBody from './components/SignupBody';
import { signup } from './api';

function SignupPage() {
  return <SignupBody signup={signup} />;
}

export default SignupPage;
