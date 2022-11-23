import axios from "axios";
import { CartDrawer } from "components/CartDrawer";
import Drawer from "react-modern-drawer";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { Cart, CartContextType, CartProduct } from "./types";

export const CartContext = createContext({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = (props: CartContextProviderProps) => {
  const { children } = props;

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const [cart, setCart] = useState([] as Cart);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleOpenCart = useCallback(() => {
    setCartIsOpen(true);
  }, []);

  const handleCloseCart = useCallback(() => {
    setCartIsOpen(false);
  }, []);

  const handleBuyCartProducts = useCallback(async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const productsDefaultPricesIds = cart.map(
        (product) => product.defaultPriceId
      );

      const { data } = await axios.post("/api/checkout", {
        productsDefaultPricesIds,
      });

      window.location.href = data.checkoutUrl;
    } catch {
      setIsCreatingCheckoutSession(false);
    } finally {
      setIsCreatingCheckoutSession(false);
    }
  }, [cart]);

  const handleAddProductToCart = useCallback(
    (product: CartProduct) => {
      setCart((prevState) => {
        const newState = [...prevState, product];

        return newState;
      });

      handleOpenCart();
    },
    [handleOpenCart]
  );

  const handleRemoveProductFromCart = useCallback((index: number) => {
    setCart((prevState) => {
      const newState = prevState.filter(
        (_, elementIndex) => elementIndex !== index
      );

      return newState;
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,

        handleOpenCart,
        handleCloseCart,

        isCreatingCheckoutSession,

        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleBuyCartProducts,
      }}
    >
      <CartDrawer isOpen={cartIsOpen} onClose={handleCloseCart} />

      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const value = useContext(CartContext);

  return value;
};
