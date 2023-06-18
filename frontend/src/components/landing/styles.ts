import { styled } from '@mui/system';

export const LandingContainer = styled(`div`)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#4357AD',
  gap: '30px',

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
