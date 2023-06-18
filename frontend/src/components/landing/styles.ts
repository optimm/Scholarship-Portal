import { styled } from '@mui/system';
import buttonImage from '@assets/images/login-google.png';

export const LandingContainer = styled(`div`)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#4357AD',
  gap: '40px',

  ['.main-image']: {
    height: '200px'
  },
  ['.main-text']: {
    fontFamily: 'Montserrat',
    fontSize: '5rem',
    fontWeight: 700,
    color: '#fff'
  }
});

export const LoginGoogleButton = styled(`button`)({
  border: 'none',
  outline: 'none',
  height: '50px',
  width: '240px',
  cursor: 'pointer',
  background: `url(${buttonImage})`,
  backgroundSize: 'cover',
  boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)',
  ['&:hover']: {
    boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)'
  }
});
