import Stripe from "stripe";
import { GetStaticProps } from "next";

import { stripe } from "lib/stripe";

import "keen-slider/keen-slider.min.css";
import { formatCurrency } from "utils/currency/format";
import { HomeTemplate, HomeTemplateProps } from "templates/Home";

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
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
