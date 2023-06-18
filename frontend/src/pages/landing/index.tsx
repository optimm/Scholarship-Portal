import { LandingContainer } from 'components/landing/styles';
import LandingIcon from '@logos/landing-logo.png';

const LandingPage: React.FC = () => {
  return (
    <LandingContainer>
      <img className='main-image' alt='landing icon' src={LandingIcon} />
      <h1 className='main-text'>ScholarEase</h1>
    </LandingContainer>
  );
};

export default LandingPage;
