import react, {useState} from "react";
import { Menu, MenuItem, NavContainer, NavLogo , ButtonContainer, Nav, MobileMenu} from "./NavbarElements"
import Link from "next/link"
import Button from "../button/button"

import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

export default function Navbar(){
    const [open,setopen] =useState(false)
    const toggleMenu = (e)=>{
        e.preventDefault();

        setopen(!open)
        console.log('menu: ',open);
    }
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
            <MobileMenu open={open}>
                <button className="menubtn" onClick={toggleMenu}>
                    <FiMenu/>
                </button>
                <div className="mobile_container">
                    <button className="mobile_close" onClick={toggleMenu}>
                        <GrFormClose/>
                    </button>
                    <div className="mobile_menu">
                        <NavLogo src="/img/logo.png" alt=""/>
                        <ul>
                            <li className=""><Link href='/'>Pay Bills </Link></li>
                            <li className=""><Link href='/'>For Businessess</Link></li>
                            <li className=""><Link href='/'>Documentation </Link></li>
                        </ul>
                        <Button text={`Register`}/>
                    </div>
                </div>
            </MobileMenu>
        </NavContainer>
    )
}