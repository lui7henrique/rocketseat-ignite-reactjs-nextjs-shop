import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <span>Enviar</span>
      </Button>
    </main>
  );
}
