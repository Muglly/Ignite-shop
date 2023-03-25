import * as S from '@/styles/pages/product'

export default function Product() {
  return (
    <S.ProductContainer>
      <S.ImageContainer></S.ImageContainer>

      <S.ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 70,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          incidunt dolorum neque. Explicabo, voluptatibus iusto itaque sint amet
          sapiente dignissimos quaerat maiores sit, sed ad laborum, suscipit
          architecto illum? Corrupti.
        </p>

        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  )
}
