import Image from "next/image";
import { styled } from "styles";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductImage = styled(Image, {
  objectFit: "cover",
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  button: {},
});

export const ProductName = styled("h1", {
  fontSize: "$2xl",
  color: "$gray300",
});

export const ProductPrice = styled("span", {
  marginTop: "1rem",
  display: "block",
  fontSize: "$2xl",
  color: "$green300",
});

export const ProductDescription = styled("p", {
  marginTop: "1rem",
  fontSize: "$md",
  lineHeight: 1.6,
  color: "$gray300",
});

export const ProductButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",

  backgroundColor: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",

  transition: "all 0.2s",
  marginTop: "auto",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:hover": {
    backgroundColor: "$green300",
  },
});

export const ProductButtons = styled("div", {
  width: "100%",
  marginTop: "auto",
  display: "flex",

  gap: "1rem",
});
