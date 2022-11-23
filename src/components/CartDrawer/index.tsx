import * as S from "./styles";
import Drawer from "react-modern-drawer";
import { useMemo } from "react";
import { v4 } from "uuid";

import { MdClose } from "react-icons/md";

import "react-modern-drawer/dist/index.css";
import { useCart } from "context/cart";
import { reverseCurrency } from "utils/currency/reverse";
import { formatCurrency } from "utils/currency/format";
import { Button } from "components/Button";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartDrawer = (props: CartDrawerProps) => {
  const { isOpen, onClose } = props;

  const {
    cart,
    isCreatingCheckoutSession,

    handleCloseCart,
    handleRemoveProductFromCart,
    handleBuyCartProducts,
  } = useCart();

  const totalValue = useMemo(
    () => cart.reduce((acc, value) => acc + reverseCurrency(value.price), 0),
    [cart]
  );

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      size="432px"
      style={{
        background: "#202024",
      }}
    >
      <S.CloseButton onClick={handleCloseCart}>
        <MdClose size={32} color="#8D8D99" />
      </S.CloseButton>

      <S.Container>
        <S.Body>
          <S.CartTitle>Sacola de compras</S.CartTitle>

          <S.CartProducts>
            {cart.map((product, index) => {
              return (
                <S.CartProduct key={v4()}>
                  <S.CartProductImageContanier>
                    <S.CartProductImage
                      src={product.imageUrl}
                      width="80"
                      height="80"
                      alt={product.name}
                    />
                  </S.CartProductImageContanier>

                  <S.CartProductInfos>
                    <S.CartProductName>{product.name}</S.CartProductName>
                    <S.CartProductPrice>{product.price}</S.CartProductPrice>
                    <S.CartProductRemove
                      onClick={() => handleRemoveProductFromCart(index)}
                    >
                      Remover
                    </S.CartProductRemove>
                  </S.CartProductInfos>
                </S.CartProduct>
              );
            })}
          </S.CartProducts>
        </S.Body>

        <S.Footer>
          <S.FooterInfos>
            <S.FooterInfo>
              <S.Label>Quantidade</S.Label>
              <S.Label>{cart.length} itens</S.Label>
            </S.FooterInfo>

            <S.FooterInfo>
              <S.Label>Valor</S.Label>
              <S.Label>{formatCurrency(totalValue)}</S.Label>
            </S.FooterInfo>
          </S.FooterInfos>

          <Button
            isLoading={isCreatingCheckoutSession}
            disabled={!cart.length}
            onClick={handleBuyCartProducts}
          >
            Finalizar compra
          </Button>
        </S.Footer>
      </S.Container>
    </Drawer>
  );
};
