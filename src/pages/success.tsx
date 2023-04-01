import * as S from '@/styles/pages/success'
import Link from 'next/link'

export default function success() {
  return (
    <S.SuccessContainer>
      <h1>Compra efetuada</h1>

      <S.ImageContainer></S.ImageContainer>

      <p>
        Uhuul <strong>Rafael Souza</strong>Rafael Souza, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </S.SuccessContainer>
  )
}
