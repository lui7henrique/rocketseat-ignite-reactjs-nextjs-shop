import Image from "next/image";
import { styled } from "styles";

export const Container = styled("div", {
  background: "$gray800",
  padding: "3rem",

  marginTop: "3rem",
  height: "85vh",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Body = styled("div", {});

export const Footer = styled("footer", {});

export const FooterInfo = styled("div", {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: "8px",
});

export const Label = styled("p", {
  fontSize: "1rem",
});

export const CloseButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "none",
  border: "none",
  outline: "none",

  cursor: "pointer",

  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",

  zIndex: 999,
});

export const CartTitle = styled("h2", {
  color: "$gray100",
  fontSize: "20px",

  marginBottom: "2rem",
});

export const CartProducts = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const CartProduct = styled("div", {
  display: "flex",
  gap: "1.2rem",
});

export const CartProductImageContanier = styled("figure", {
  width: "80px",
  height: "80px",

  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: "8px",

  overflow: "hidden",
});

export const CartProductImage = styled(Image, {
  objectFit: "cover",
});

export const CartProductInfos = styled("div", {});

export const CartProductName = styled("h3", {
  fontWeight: 400,
  fontSize: "1rem",
  color: "$gray300",
});

export const CartProductPrice = styled("p", {
  color: "#E1E1E6",

  fontWeight: "bold",
  fontSize: "18px",

  marginTop: "4px",
});

export const CartProductRemove = styled("p", {
  color: "#00875F",
  fontWeight: "bold",

  marginTop: "12px",
  cursor: "pointer",
});
