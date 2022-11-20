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
  bottom: "1rem",
  left: "1rem",
  right: "1rem",

  padding: "1rem",

  borderRadius: 6,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  backgroundColor: "rgba(0, 0, 0, 0.6)",

  transform: "translateY(150%)",
  transition: "all 0.3s",
});

export const ProductTitle = styled("strong", {
  fontSize: "$md",
  color: "$gray100",
});

export const ProductPrice = styled("span", {
  fontSize: "$md",
  fontWeight: "bold",
  color: "$green300",
});
