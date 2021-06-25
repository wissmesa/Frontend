import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa'

    
    import {FooterContainer,
        FooterWrap,
         FooterLinksContainer,
          FooterLinksWrapper,
          FooterLinkItems,
          FooterLinkTittle,
          FooterLink,
          SocialMedia,
          SocialMediaWrap,
          SocialLogo,
          WebsiteRights,
          SocialIcons,
          SocialIconLink
        } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                         <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTittle> About Us </FooterLinkTittle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Company</FooterLink>
                            <FooterLink to="/signin">Customers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                            <FooterLink to="/signin">Jobs</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTittle> Sales </FooterLinkTittle>
                            <FooterLink to="/signin">Contact Sales</FooterLink>
                            <FooterLink to="/signin">Webinars and Events</FooterLink>
                            <FooterLink to="/signin">Request a Demo</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                            <FooterLink to="/signin">Jobs</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                            <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTittle> Support </FooterLinkTittle>
                            <FooterLink to="/signin">Account</FooterLink>
                            <FooterLink to="/signin">Support Center</FooterLink>
                            <FooterLink to="/signin">Feedback</FooterLink>
                            <FooterLink to="/signin">Contact Us</FooterLink>
                            <FooterLink to="/signin">Jobs</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTittle> Social Media </FooterLinkTittle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">LinkedIn</FooterLink>  
                        </FooterLinkItems>
                         </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            EzZoom
                        </SocialLogo>
                    <WebsiteRights> Copyright © {new Date().getFullYear()} EzZoom Developed by Cirious, Inc. All rights reserved.   </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook" >
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" >
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
