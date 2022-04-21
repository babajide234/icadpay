import { Menu, MenuItem, NavContainer, NavLogo , ButtonContainer, Nav } from "./NavbarElements"
import Link from "next/link"
import Button from "../button/button"
export default function Navbar(){
    return(
        <NavContainer>
            <Nav>
                <NavLogo src="/img/logo.png" alt=""/>
                <Menu>
                    <MenuItem><Link href={`/bills`}>Pay bills</Link></MenuItem>
                    <MenuItem><Link href={`/`}>For businesses </Link></MenuItem>
                    <MenuItem><Link href={`/`}>Documentation </Link></MenuItem>
                </Menu>
            </Nav>
            <ButtonContainer>
                <Button text={`Register`}/>
            </ButtonContainer>
        </NavContainer>
    )
}