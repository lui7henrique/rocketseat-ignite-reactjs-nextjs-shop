import Image from "next/image";
import { styled } from "styles";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ProductsList = styled("div", {
  display: "flex",
  gap: "1rem",
});

export const ImageContainer = styled("div", {
  width: 150,
  height: 150,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  borderRadius: "50%",
});

export const ProductImage = styled(Image, {
  objectFit: "contain",
});

export const SuccessTitle = styled("h1", {
  fontSize: "$2xl",
  color: "$gray100",
});

export const SuccessDescription = styled("p", {
  fontSize: "$xl",
  color: "$gray300",
  maxWidth: 560,
  textAlign: "center",
  marginTop: "2rem",
  lineHeight: 1.4,
});
