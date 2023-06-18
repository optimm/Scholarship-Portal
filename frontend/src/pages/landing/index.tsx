import { LandingContainer, LoginGoogleButton } from 'components/landing/styles';
import LandingIcon from '@logos/landing-logo.png';
import GoogleIcon from '@logos/google-logo.png';

const LandingPage: React.FC = () => {
  return (
    <LandingContainer>
      <img className='main-image' alt='landing icon' src={LandingIcon} />
      <h1 className='main-text'>ScholarEase</h1>
      <LoginGoogleButton>
        <img className='button-icon' alt='google login' src={GoogleIcon} />
        Sign in with Google
      </LoginGoogleButton>
    </LandingContainer>
  );
};

export default LandingPage;
