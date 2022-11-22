import * as S from "./styles";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { useCart } from "context/cart";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CartDrawer = (props: CartDrawerProps) => {
  const { isOpen, onClose } = props;

  const { cart } = useCart();

  return (
    <Drawer open={isOpen} onClose={onClose} size="400px" direction="right">
      <S.Content>
        {cart.map((product) => {
          return <h1 key={product.id}>{product.name}</h1>;
        })}
      </S.Content>
    </Drawer>
  );
};
