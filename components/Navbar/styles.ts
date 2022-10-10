import { styled } from '../../stitches.config';

export const NavBarContainer = styled('header', {
	position: 'fixed',
  display: 'flex',
  width: '100vw',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '$background',
  padding: '0 5vw ',
  boxShadow: '1px 1px 1px 2px #33333310'
});
