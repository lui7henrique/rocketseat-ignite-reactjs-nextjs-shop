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

  // const handleToggleDrawer = useCallback(() => {
  //   setDrawerIsOpen((prevState) => !prevState);
  // }, []);

  const handleBuyProduct = useCallback(async (defaultPriceId: string) => {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }, []);

  const handleAddProductToCart = (product: CartProduct) => {
    setCart((prevState) => {
      const newState = [...prevState, product];

      return newState;
    });

    handleOpenCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        handleOpenCart,

        isCreatingCheckoutSession,

        handleAddProductToCart,
        handleBuyProduct,
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
