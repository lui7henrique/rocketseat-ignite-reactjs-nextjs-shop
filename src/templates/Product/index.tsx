import axios from "axios";
import { useCallback, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

import { Product } from "types/product";

import * as S from "./styles";

export type ProductTemplateProps = {
  product: Product;
};

export const ProductTemplate = ({ product }: ProductTemplateProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const { name, price, imageUrl, description } = product;

  const handleBuyButton = useCallback(async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }, [product.defaultPriceId]);

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

        <S.ProductButtons>
          <S.ProductButton
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyButton}
          >
            Comprar agora
          </S.ProductButton>

          <S.ProductButton
            onClick={handleBuyButton}
            disabled={isCreatingCheckoutSession}
          >
            <FaCartPlus size={24} />
            Adicionar ao carrinho
          </S.ProductButton>
        </S.ProductButtons>
      </S.ProductDetails>
    </S.ProductContainer>
  );
};
