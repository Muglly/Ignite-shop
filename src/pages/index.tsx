import Image from 'next/image'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'

import { useKeenSlider } from 'keen-slider/react'

import * as S from '@/styles/pages/home'
import Stripe from 'stripe'

import Camiseta1 from '../assets/camisetas/1.png'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <S.Product
            key={`Product-${product.id}`}
            className="keen-slider__slide"
          >
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </S.Product>
        )
      })}
    </S.HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
  }
}
