import { stripe } from "lib/stripe";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { ProductTemplate, ProductTemplateProps } from "templates/Product";
import { formatCurrency } from "utils/currency/format";

export default function Product(props: ProductTemplateProps) {
  console.log({ props });

  return <ProductTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "prod_MlpXHelkPjtHZ3" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  if (productId) {
    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });

    const price = product.default_price as Stripe.Price;

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: formatCurrency(price ? Number(price.unit_amount) / 100 : 0),
          description: product.description,
          defaultPriceId: price.id,
        },
      },
      revalidate: 60 * 60 * 1, // 1 hours
    };
  }

  return {
    props: {},
    redirect: {
      destination: "/",
    },
  };
};
