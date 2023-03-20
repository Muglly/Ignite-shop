import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import Camiseta1 from '../assets/camisetas/1.png'
import Camiseta2 from '../assets/camisetas/2.png'
import Camiseta3 from '../assets/camisetas/3.png'
import Camiseta4 from '../assets/camisetas/4.png'

import * as S from '@/styles/pages/home'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src={Camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={Camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={Camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={Camiseta4} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  )
}

export const getSeverSideProps = () => {
  return {
    props: 
  }
}
