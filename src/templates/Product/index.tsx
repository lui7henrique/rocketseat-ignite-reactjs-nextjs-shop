import { Button } from "components/Button";
import { useCart } from "context/cart";

import { FaCartPlus } from "react-icons/fa";

import { Product } from "types/product";

import * as S from "./styles";

export type ProductTemplateProps = {
  product: Product;
};

export const ProductTemplate = ({ product }: ProductTemplateProps) => {
  const { name, price, imageUrl, description } = product;

  const { handleAddProductToCart } = useCart();

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

        <Button onClick={() => handleAddProductToCart(product)}>
          <FaCartPlus size={24} />
          Adicionar ao carrinho
        </Button>
      </S.ProductDetails>
    </S.ProductContainer>
  );
};
