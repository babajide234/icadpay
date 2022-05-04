import react, {useState} from "react";
import { Menu, MenuItem, NavContainer, NavLogo , ButtonContainer, Nav, MobileMenu} from "./NavbarElements"
import Link from "next/link"
import Button from "../button/button"
import { useRouter } from 'next/router';

import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

export default function Navbar(){
    const [open,setopen] =useState(false)
    const toggleMenu = (e)=>{
        e.preventDefault();

        setopen(!open)
        console.log('menu: ',open);
    }
    const router = useRouter();

    const hadleregister = ()=>{
        router.push('https://icadpay.com/user/register')
    }
    return(
        <NavContainer>
            <Nav>
                <Link href='/' passHref>
                    <NavLogo src="/img/logo.png" alt=""/>
                </Link>
                <Menu>
                    <MenuItem><Link href={`/bills`}>Pay bills</Link></MenuItem>
                    <MenuItem><Link href={`/`}>For businesses </Link></MenuItem>
                    <MenuItem><Link href={`/`}>Documentation </Link></MenuItem>
                </Menu>
            </Nav>
            <ButtonContainer>
                <Button text={`Register`} click={hadleregister}/>
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
                        <div className="">
                            {/* <Link href='/bills'> */}
                                <NavLogo src="/img/logo.png" alt="" />
                            {/* </Link> */}
                        </div>
                        <ul>
                            <li className=""><Link href={`/bills`}>Pay Bills </Link></li>
                            <li className=""><Link href={`/`}>For Businessess</Link></li>
                            <li className=""><Link href={`/`}>Documentation </Link></li>
                        </ul>
                        <Button text={`Register`}/>
                    </div>
                </div>
            </MobileMenu>
        </NavContainer>
    )
}