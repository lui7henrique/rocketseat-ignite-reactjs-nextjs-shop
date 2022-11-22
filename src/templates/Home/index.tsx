import { useCart } from "context/cart";
import { useKeenSlider } from "keen-slider/react";
import { HomeProduct } from "types/product";

import {
  HomeContainer,
  Product,
  ProductFooter,
  ProductImg,
  ProductPrice,
  ProductTitle,
} from "./styles";

export type HomeTemplateProps = {
  products: HomeProduct[];
};

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { products } = props;

  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const { id, imageUrl, name, price } = product;

        return (
          <Product
            href={`/product/${id}`}
            key={id}
            className="keen-slider__slide"
            prefetch={false}
          >
            <ProductImg
              src={imageUrl}
              width={520}
              height={480}
              alt={name}
              quality={100}
            />

            <ProductFooter>
              <ProductTitle>{name}</ProductTitle>
              <ProductPrice>{price}</ProductPrice>
            </ProductFooter>
          </Product>
        );
      })}
    </HomeContainer>
  );
};
