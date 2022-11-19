import Link from "next/link";
import * as S from "./styles";

export type SuccessTemplateProps = {
  customerName: string;
  product?: {
    name: string;
    imageUrl: string;
  };
};

export const SuccessTemplate = (props: SuccessTemplateProps) => {
  const { customerName, product } = props;

  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Compra efetuada</S.SuccessTitle>

      <S.ImageContainer>
        {product?.imageUrl && (
          <S.ProductImage
            src={product?.imageUrl}
            width={120}
            height={110}
            alt=""
          />
        )}
      </S.ImageContainer>

      <S.SuccessDescription>
        Uhuul <strong>{customerName}</strong>, sua{" "}
        <strong>{product?.name}</strong> já está a caminho da sua casa.
      </S.SuccessDescription>

      <Link href="/">Voltar ao catálogo</Link>
    </S.SuccessContainer>
  );
};
