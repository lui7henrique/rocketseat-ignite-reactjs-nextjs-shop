import { styled } from "styles";

export const Button = styled("button", {
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

  width: "100%",

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
