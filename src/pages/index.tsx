import { useKeenSlider } from "keen-slider/react";
import Stripe from "stripe";
import { GetStaticProps } from "next";

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
import { formatCurrency } from "utils/currency/format";

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const { unit_amount } = product.default_price as Stripe.Price;
    const price = formatCurrency(unit_amount ? unit_amount / 100 : 0);

    const imageUrl = product.images[0];

    return {
      id: product.id,
      name: product.name,
      imageUrl,
      price,
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 6, // 6 hours
  };
};
