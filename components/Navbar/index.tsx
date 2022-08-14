import { StarIcon } from "@radix-ui/react-icons";
import { NavBarContainer } from "./styles";

export default function NavBar() {
  return (
    <NavBarContainer>
      <StarIcon transform="scale(2)" color="#fff" scale={35} />
    </NavBarContainer>
  )
}