import { useKeenSlider } from "keen-slider/react";
import Stripe from "stripe";
import { GetServerSideProps } from "next";

import { stripe } from "lib/stripe";

import {
  HomeContainer,
  Product,
  ProductFooter,
  ProductImg,
  ProductPrice,
  ProductTitle,
} from "styles/pages/home";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home(props: HomeProps) {
  const { products } = props;

  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48 },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const { id, imageUrl, name, price } = product;

        return (
          <Product key={id} className="keen-slider__slide">
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
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const { unit_amount } = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: unit_amount ? unit_amount / 100 : 0,
    };
  });

  return {
    props: { products },
  };
};
