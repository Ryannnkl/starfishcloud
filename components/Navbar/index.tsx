import { StarIcon } from "@radix-ui/react-icons";

import { NavBarContainer } from "./styles";

import logo from "../../public/logo_nogb.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <NavBarContainer>
      <Image src={logo} width={543/8} height={288/8} />
    </NavBarContainer>
  )
}