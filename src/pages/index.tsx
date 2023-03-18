import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  width: '16rem',
  height: '9rem',
  cursor: 'pointer',
  borderRadius: 10,
})

export default function Home() {
  return (
    <>
      <Button>Enviar</Button>
    </>
  )
}
