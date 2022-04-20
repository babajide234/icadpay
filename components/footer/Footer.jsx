import { FooterContainer } from '../Home/HomeElements';
import { Section, Container } from './../Layout/layoutElement';
import Image from "next/image";
import { ButtonMain } from '../button/buttonElements';
import MainButton from '../button/MainButton';
export default function Footer() {
    return (
        <Section bg='#1D2646' padding='28px 0px'>
            <Container>
                <FooterContainer>
                    <div className="footer_contacts">
                        <div className="footer_contacts_contact">
                            <h3 className="">Contact our team.</h3>
                            <div className="footer_contact">
                                <div className="footer_contact_item">
                                    <Image src='/img/mail.svg' alt='' width={28} height={28} />
                                    <h4>support@zuvy.co</h4>
                                </div>
                                <div className="footer_contact_item">
                                    <Image src='/img/phone.svg' alt='' width={28} height={28} />
                                    <h4>+234-8055506908</h4>
                                </div>
                            </div>
                        </div>
                        <div className="footer_contacts_social">
                            <ul className="footer_contacts_social_list">
                                <li className='footer_contacts_social_item'><a href="" className="footer_contacts_social_link"><Image src='/img/facebook.svg' alt='' width={20} height={20}/></a></li>
                                <li className='footer_contacts_social_item'><a href="" className="footer_contacts_social_link"><Image src='/img/twitter.svg' alt='' width={20} height={20}/></a></li>
                                <li className='footer_contacts_social_item'><a href="" className="footer_contacts_social_link"><Image src='/img/instagram.svg' alt='' width={20} height={20}/></a></li>
                                <li className='footer_contacts_social_item'><a href="" className="footer_contacts_social_link"><Image src='/img/linkden.svg' alt='' width={20} height={20}/></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer_menu">
                        <div className="footer_menu_nav">
                            <Image src='/img/logow.png' alt='' width={116} height={39} />
                            <ul className="footer_menu_nav_list">
                                <li className="footer_menu_nav_item"><a href="" className="footer_menu_nav_link">About Zuvy</a></li>
                                <li className="footer_menu_nav_item"><a href="" className="footer_menu_nav_link">How it works</a></li>
                                <li className="footer_menu_nav_item"><a href="" className="footer_menu_nav_link">Features</a></li>
                                <li className="footer_menu_nav_item"><a href="" className="footer_menu_nav_link">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer_menu_btn">
                            <MainButton text='Get started' main={true}/>
                        </div>
                    </div>
                    
                    <div className="footer_copyright">
                        <div className="footer_copyright_rights">
                            <h4>2022  zuvy. All Rights Reserved</h4>
                        </div>
                        <div className="footer_copyright_policy">
                            <a href="" className="">Privacy Policy</a>
                            <a href="" className="">Cookies</a>
                        </div>
                    </div>
                </FooterContainer>
            </Container>
        </Section>
    );
}