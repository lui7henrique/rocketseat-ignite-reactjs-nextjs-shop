import { useKeenSlider } from "keen-slider/react";

import {
  HomeContainer,
  Product,
  ProductFooter,
  ProductImg,
  ProductPrice,
  ProductTitle,
} from "styles/pages/home";

import camiseta2 from "../../public/assets/camisetas/2.png";
import camiseta3 from "../../public/assets/camisetas/3.png";
import camiseta4 from "../../public/assets/camisetas/4.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <ProductImg
          src={camiseta2.src}
          width={camiseta2.width}
          height={camiseta2.height}
          alt="camiseta 1"
        />

        <ProductFooter>
          <ProductTitle>Camiseta 1</ProductTitle>
          <ProductPrice>R$80.48</ProductPrice>
        </ProductFooter>
      </Product>

      <Product className="keen-slider__slide">
        <ProductImg
          src={camiseta3.src}
          width={camiseta3.width}
          height={camiseta3.height}
          alt="camiseta 1"
        />

        <ProductFooter>
          <ProductTitle>Camiseta 1</ProductTitle>
          <ProductPrice>R$80.48</ProductPrice>
        </ProductFooter>
      </Product>

      <Product className="keen-slider__slide">
        <ProductImg
          src={camiseta4.src}
          width={camiseta4.width}
          height={camiseta4.height}
          alt="camiseta 1"
        />

        <ProductFooter>
          <ProductTitle>Camiseta 1</ProductTitle>
          <ProductPrice>R$80.48</ProductPrice>
        </ProductFooter>
      </Product>

      <Product className="keen-slider__slide">
        <ProductImg
          src={camiseta4.src}
          width={camiseta4.width}
          height={camiseta4.height}
          alt="camiseta 1"
        />

        <ProductFooter>
          <ProductTitle>Camiseta 1</ProductTitle>
          <ProductPrice>R$80.48</ProductPrice>
        </ProductFooter>
      </Product>
    </HomeContainer>
  );
}
