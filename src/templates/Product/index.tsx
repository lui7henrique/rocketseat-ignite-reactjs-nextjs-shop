import { useCart } from "context/cart";

import { FaCartPlus } from "react-icons/fa";

import { Product } from "types/product";

import * as S from "./styles";

export type ProductTemplateProps = {
  product: Product;
};

export const ProductTemplate = ({ product }: ProductTemplateProps) => {
  const { name, price, imageUrl, description, defaultPriceId } = product;

  console.log({ product });

  const {
    isCreatingCheckoutSession,
    handleBuyProduct,
    handleAddProductToCart,
  } = useCart();

  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <S.ProductImage
          src={imageUrl}
          width={520}
          height={480}
          alt={name}
          quality={100}
        />
      </S.ImageContainer>

      <S.ProductDetails>
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>{price}</S.ProductPrice>
        <S.ProductDescription>{description}</S.ProductDescription>

        <S.ProductButton
          onClick={() => handleAddProductToCart(product)}
          disabled={isCreatingCheckoutSession}
        >
          <FaCartPlus size={24} />
          Adicionar ao carrinho
        </S.ProductButton>

        {/* <S.ProductButtons>
          <S.ProductButton
            disabled={isCreatingCheckoutSession}
            onClick={() => handleBuyProduct(defaultPriceId)}
          >
            Comprar agora
          </S.ProductButton>
        </S.ProductButtons> */}
      </S.ProductDetails>
    </S.ProductContainer>
  );
};
