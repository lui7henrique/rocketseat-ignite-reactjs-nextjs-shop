import { ReactNode } from "react";
import { CartContextProvider } from "./cart";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};
