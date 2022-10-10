import { styled } from "../../stitches.config";


export const TextCard = styled('p', {
  color: '#0F0E17',
  fontWeight: '600',
  fontFamily: 'Readex Pro',
  fontSize: 18,
  variants:  {
    size: {
      lg: {
        fontSize: 22
      },
      title: {
        color: '#555',
      }
    }
  }
});

export const NumberCard = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 22,
  height: 44,
  width: 44,
  backgroundColor: '#333',
  color: '#eee'
});

export const ContainerCard = styled('a', {
  display: 'flex',
  cursor: 'pointer',
  width: 160,
  height: 120,
  fontWeight: '600',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#D9D9D9',
  padding: 8,
  marginY: 20,
  borderRadius: 4,
  transitionDuration: '0.2s',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#333',
    [`& ${NumberCard}`]: {
      backgroundColor: '#D9D9D9',
      color: '#333'
    },
    [`& ${TextCard}`]: {
      color: '#d9d9d9'
    }
  },

});
