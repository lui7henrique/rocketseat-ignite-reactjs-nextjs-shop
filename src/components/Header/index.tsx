import { useCart } from "context/cart";
import Image from "next/image";
import { RiHandbagLine } from "react-icons/ri";

import * as S from "./styles";

export const Header = () => {
  const { cart, handleOpenCart } = useCart();

  return (
    <S.Container>
      <Image src="/assets/logo.svg" alt="logo" width="130" height="50" />

      <S.Cart onClick={handleOpenCart}>
        <RiHandbagLine size={20} color="#C4C4CC" />

        <S.CartQuantity>{cart.length}</S.CartQuantity>
      </S.Cart>
    </S.Container>
  );
};
