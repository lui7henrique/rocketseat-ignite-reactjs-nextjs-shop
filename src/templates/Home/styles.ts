import Image from "next/image";
import Link from "next/link";
import { styled } from "styles";

export const HomeContainer = styled("main", {
  display: "flex",

  width: "100%",

  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: "4px",

  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
    },
  },
});

export const ProductImg = styled(Image, {
  objectFit: "cover",
});

export const ProductFooter = styled("footer", {
  position: "absolute",
  bottom: "0.25rem",
  left: "0.25rem",
  right: "0.25rem",
  padding: "2rem",

  borderRadius: 6,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: "rgba(0, 0, 0, 0.6)",

  transform: "translateY(110%)",
  transition: "all 0.3s",
});

export const ProductTitle = styled("strong", {
  fontSize: "$lg",
  color: "$gray100",
});

export const ProductPrice = styled("span", {
  fontSize: "$xl",
  fontWeight: "bold",
  color: "$green300",
});
