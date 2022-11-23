import Link from "next/link";
import { v4 } from "uuid";
import * as S from "./styles";

type SucessProduct = {
  name: string;
  imageUrl: string;
};

export type SuccessTemplateProps = {
  customerName: string;
  products?: Array<SucessProduct>;
};

export const SuccessTemplate = (props: SuccessTemplateProps) => {
  const { customerName, products } = props;

  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Compra efetuada</S.SuccessTitle>

      <S.ProductsList>
        {products?.map((product) => {
          return (
            <S.ImageContainer key={v4()}>
              <S.ProductImage
                src={product?.imageUrl}
                width={150}
                height={150}
                alt=""
              />
            </S.ImageContainer>
          );
        })}
      </S.ProductsList>

      <S.SuccessDescription>
        Uhuul <strong>{customerName}</strong>, sua compra de{" "}
        <strong>{products?.length} camisetas</strong> já está a caminho da sua
        casa! 😁
      </S.SuccessDescription>

      <Link href="/">Voltar ao catálogo</Link>
    </S.SuccessContainer>
  );
};
