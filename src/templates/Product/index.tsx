import { Product } from "types/product";
import * as S from "./styles";

export type ProductTemplateProps = {
  product: Product;
};

export const ProductTemplate = (props: ProductTemplateProps) => {
  const { product } = props;
  const { name, price, imageUrl, description } = product;

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
        <h1>{name}</h1>
        <span>{price}</span>

        <p>{description}</p>

        <button>Comprar agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  );
};
