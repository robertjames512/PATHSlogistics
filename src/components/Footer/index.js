import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialSpacing,
  WebsiteRights,
  WebsiteSlogan,
  SloganWrap,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        
        <SocialMedia>
        <SloganWrap>
        <WebsiteSlogan>THE PATH OF LEAST RESISTANCE</WebsiteSlogan>
        </SloganWrap>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Paths Logistics
            </SocialLogo>
            <WebsiteRights>Paths Logistics © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/pathslogistics' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialSpacing>.      .</SocialSpacing>
              <SocialIconLink href='https://instagram.com/pathslogistics?igshid=YmMyMTA2M2Y=' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
