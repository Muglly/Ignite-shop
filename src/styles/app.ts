import { styled } from '.'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  width: '100%',
  padding: '2rem 0',
  maxWidth: 1180,
  margin: '0 auto',
})
