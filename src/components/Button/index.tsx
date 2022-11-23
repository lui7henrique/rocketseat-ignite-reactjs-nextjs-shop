import { ReactNode } from "react";
import * as S from "./styles";
import { MetroSpinner } from "react-spinners-kit";

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, isLoading, ...buttonProps } = props;

  return (
    <S.Button {...buttonProps}>
      {isLoading ? <MetroSpinner size={22} /> : children}
    </S.Button>
  );
};
