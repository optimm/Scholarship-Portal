import { styled } from '@mui/system';

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
    fontSize: '5rem',
    fontWeight: 700,
    color: '#fff'
  }
});

export const LoginGoogleButton = styled(`a`)({
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: `#fff`,
  textDecoration: 'none',
  display: 'flex',
  padding: '10px 20px',
  alignItems: 'center',
  gap: '10px',
  fontSize: '16px',
  fontWeight: 700,
  color: 'var(--text-tertiary)',
  borderRadius: '5px',
  boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)',
  ['&:hover']: {
    boxShadow: '0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)'
  },
  ['.button-icon']: {
    height: '25px'
  }
});
