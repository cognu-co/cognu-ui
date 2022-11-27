import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  padding: "$4",
});

export default function App() {
  return <Button>elias alexandre</Button>;
}