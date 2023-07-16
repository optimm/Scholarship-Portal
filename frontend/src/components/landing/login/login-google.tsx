import { AuthRepo } from '@modules/auth/service/auth.repo';
import { LoginGoogleButton } from '../styles';
import GoogleIcon from '@logos/google-logo.png';
import { envConfig } from 'common/env';

export const GoogleLogin: React.FC = () => {
  const handleLogin = async () => {
    try {
      await AuthRepo.login();
    } catch (error) {}

    // window.location.replace('http://localhost:3000');
  };

  return (
    <LoginGoogleButton href={`${envConfig.backendBaseUrl}/auth/google`}>
      <img className='button-icon' alt='google login' src={GoogleIcon} />
      Sign in with Google
    </LoginGoogleButton>
  );
};
