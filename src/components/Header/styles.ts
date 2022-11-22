import { styled } from "styles";

export const Container = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Cart = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "$gray800",

  width: "48px",
  height: "48px",

  outline: "none",
  border: "none",

  borderRadius: "6px",
  position: "relative",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    filter: "opacity(0.8)",
  },
});

export const CartQuantity = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",

  top: -8,
  right: -8,

  fontWeight: 700,
  fontSize: "12px",
  color: "#FFFFFF",

  borderRadius: "50%",
  backgroundColor: "$green500",

  width: "24px",
  height: "24px",

  borderWidth: "3px",
  borderStyle: "solid",
  borderColor: "#121214",
});
