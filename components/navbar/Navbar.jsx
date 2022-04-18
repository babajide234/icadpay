import { Menu, MenuItem, NavContainer, NavLogo , ButtonContainer, Nav } from "./NavbarElements"
import Link from "next/link"
import Button from "../button/button"
export default function Navbar(){
    return(
        <NavContainer>
            <Nav>
                <NavLogo src="/img/logo.png" alt=""/>
                <Menu>
                    <MenuItem><Link href={`/`}>Home</Link></MenuItem>
                    <MenuItem><Link href={`/`}>Pay bills</Link></MenuItem>
                    <MenuItem><Link href={`/`}>For businesses </Link></MenuItem>
                    <MenuItem><Link href={`/`}>Documentation </Link></MenuItem>
                    <MenuItem><Link href={`/`}>About Us</Link></MenuItem>
                </Menu>
            </Nav>
            <ButtonContainer>
                <Button text={`Register`}/>
            </ButtonContainer>
        </NavContainer>
    )
}