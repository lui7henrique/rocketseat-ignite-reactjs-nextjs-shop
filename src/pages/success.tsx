import { stripe } from "lib/stripe";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Stripe from "stripe";
import { SuccessTemplate, SuccessTemplateProps } from "templates/Success";

export default function Success(props: SuccessTemplateProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessTemplate {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details
    ? session.customer_details.name
    : "usuário desconhecido";

  const product =
    session.line_items?.data[0].price &&
    (session.line_items.data[0].price.product as Stripe.Product);

  return {
    props: {
      customerName,
      product: product
        ? {
            name: product.name,
            imageUrl: product.images[0],
          }
        : undefined,
    },
  };
};
