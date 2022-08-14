import { styled } from '../../stitches.config';

export const NavBarContainer = styled('header', {
	position: 'fixed',
  display: 'flex',
  width: '100vw',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #222',
  background: '$background',
  padding: '0 5vw '
});
