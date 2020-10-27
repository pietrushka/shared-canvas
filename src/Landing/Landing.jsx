import React, { useEffect, useState, useContext, useRef } from 'react'
import Vara from 'vara'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { TimelineLite, Power3 } from 'gsap'

import { UserContext } from '../App'

import {
  Navbar, NavbarInner, NavbarLogo, Hamburger, HamburgerInner, Menu, MenuOptionBasic, MenuOptionBold, MenuOptionBtn,
  Footer, CurvedSVG, LinkGroup, FooterLink, FooterHeading, LinksMedia, IconsContainer, ExternalLink, CopyrightsPanel, CopyrightsText, Newsletter, NewsletterHeading, NewsletterParagraph, NewletterForm, NewletterInput, NewletterBtn, Hero, Text, HeroHeading, TextLine, TextInner, HeroParagraph, FindOutBtn, Images, ImagesContainer, ImagesInner, TabletImage, TabletScreen, PhoneImage, PhoneScreen, LaptopImage, LaptopTopEl, LaptopScreen, LaptopBottomEl, OverlayMenu
} from './Landing.styles'

const LandingPage2 = () => {
  const { setUser } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const contentRef = useRef(null)
  const tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // Check is user logged in
    const token = window.localStorage.getItem('wideboardToken')
    token ? setIsLoggedIn(true) : setIsLoggedIn(false)

    // Animation
    const headlineFirst = contentRef.current.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const paragraph = contentRef.current.children[1]
    const button = contentRef.current.children[2]

    tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
      y: 44,
      ease: Power3.easeOut
    }, 0.15, 'Start')
      .from(paragraph, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(button, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)

    // handwriting using vara.js. To get responsive size reload the page
    const setFontSizes = () => {
      if (window.screen.width < 350) return { laptop: 8, tablet: 6, phone: 3 }
      if (window.screen.width < 390) return { laptop: 9, tablet: 7, phone: 4 }
      if (window.screen.width < 630) return { laptop: 11, tablet: 8, phone: 4 }
      if (window.screen.width < 691) return { laptop: 17, tablet: 12, phone: 6 }
      if (window.screen.width < 768) return { laptop: 18, tablet: 13, phone: 7 }
      if (window.screen.width < 972) return { laptop: 11, tablet: 7, phone: 4 }
      if (window.screen.width < 1186) return { laptop: 14, tablet: 11, phone: 6 }
      return { laptop: 17, tablet: 13, phone: 7 }
    }

    const fontSize = setFontSizes()

    const laptopVara = new Vara('#laptop-screen', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json', [{
      text: 'f(x) = ax + b',
      textAlign: 'left',
      fontSize: fontSize.laptop,
      strokeWidth: 2,
      delay: 2700
    }])

    // phone Vara
    const phoneVara = new Vara('#phone-screen', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json', [{
      text: 'f(x) = ax + b',
      textAlign: 'left',
      fontSize: fontSize.phone,
      strokeWidth: 2,
      delay: 3000
    }])

    // tablet Vara
    const tabletVara = new Vara('#tablet-screen', 'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json', [{
      text: 'f(x) = ax + b',
      textAlign: 'left',
      fontSize: fontSize.tablet,
      strokeWidth: 2,
      delay: 3000
    }])
  }, [])

  const logout = () => {
    window.localStorage.removeItem('wideboardToken')
    setUser(null)
    setIsLoggedIn(false)
  }

  const hamburgerHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <Navbar open={open && true}>
        <NavbarInner>
          <NavbarLogo>wideboared.</NavbarLogo>
          <Hamburger onClick={hamburgerHandler}>
            <HamburgerInner open={open && true} />
          </Hamburger>
          <Menu horizontal>
            <li>
              <MenuOptionBasic onClick={() => window.alert('work in progress')} to='#'>About</MenuOptionBasic>
            </li>
            <li>
              <MenuOptionBasic onClick={() => window.alert('work in progress')} to='#'>Contact</MenuOptionBasic>
            </li>
            {
              isLoggedIn
                ? (
                  <>
                    <li>
                      <MenuOptionBold to='/' onClick={logout}>Logout</MenuOptionBold>
                    </li>
                    <li>
                      <MenuOptionBtn to='/console/create-join-room'>Open Console</MenuOptionBtn>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <MenuOptionBold to='/login'>Login</MenuOptionBold>
                    </li>
                    <li>
                      <MenuOptionBtn to='/register'>Register</MenuOptionBtn>
                    </li>
                  </>
                )
            }
          </Menu>
        </NavbarInner>
      </Navbar>

      <OverlayMenu open={open && true}>
        <Menu>
          <li>
            <MenuOptionBasic onClick={() => window.alert('work in progress')} to='#'>About</MenuOptionBasic>
          </li>
          <li>
            <MenuOptionBasic onClick={() => window.alert('work in progress')} to='#'>Contact</MenuOptionBasic>
          </li>
          {
            isLoggedIn
              ? (
                <>
                  <li>
                    <MenuOptionBold to='/' onClick={logout}>Logout</MenuOptionBold>
                  </li>
                  <li>
                    <MenuOptionBtn to='/console/create-join-room'>Open Console</MenuOptionBtn>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <MenuOptionBold to='/login'>Login</MenuOptionBold>
                  </li>
                  <li>
                    <MenuOptionBtn to='/register'>Register</MenuOptionBtn>
                  </li>
                </>
              )
          }
        </Menu>
      </OverlayMenu>

      <Hero>
        <Text ref={contentRef}>
          <HeroHeading>
            <TextLine>
              <TextInner>We help</TextInner>
            </TextLine>
            <TextLine>
              <TextInner>transfer knowledge</TextInner>
            </TextLine>
          </HeroHeading>

          <HeroParagraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aliquam voluptates ipsum iusto .</HeroParagraph>
          <FindOutBtn>Find out more</FindOutBtn>
        </Text>

        <Images>
          <ImagesContainer>
            <ImagesInner>
              <TabletImage>
                <TabletScreen id='tablet-screen' />
              </TabletImage>

              <PhoneImage>
                <PhoneScreen id='phone-screen' />
              </PhoneImage>

              <LaptopImage>
                <LaptopTopEl>
                  <LaptopScreen id='laptop-screen' />
                </LaptopTopEl>
                <LaptopBottomEl />
              </LaptopImage>

            </ImagesInner>
          </ImagesContainer>
        </Images>

      </Hero>

      <CurvedSVG className='curved-svg--up' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 199'>
        <path fill='#0099ff' fillOpacity='1' d='M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,160C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z' />
      </CurvedSVG>

      <Newsletter>
        <NewsletterHeading>Sign up to newsletter</NewsletterHeading>
        <NewsletterParagraph>
          Don't miss new <span>wideboard.</span> features
        </NewsletterParagraph>
        <NewletterForm>
          <NewletterInput
            placeholder='Your name'
          />
          <NewletterInput
            placeholder='Your e-mail'
          />
          <NewletterBtn>Join now!</NewletterBtn>
        </NewletterForm>
      </Newsletter>

      <CurvedSVG
        xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'
      >
        <path fill='#0099ff' fillOpacity='1' d='M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,96C672,107,768,181,864,202.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z' />
      </CurvedSVG>
      <Footer>

        <LinkGroup>
          <FooterHeading>wideboard.</FooterHeading>
          <FooterLink to='/about'>About</FooterLink>
          <FooterLink to='/contact'>Contact</FooterLink>
        </LinkGroup>
        <LinkGroup>
          <FooterHeading>Informations</FooterHeading>
          <FooterLink to='/conditions'>Terms & Conditions</FooterLink>
          <FooterLink to='/privacy'>Privacy Policy</FooterLink>
        </LinkGroup>

        <LinksMedia>
          <FooterHeading>Join us!</FooterHeading>
          <IconsContainer>
            <ExternalLink href='/'>
              <FaFacebook size='2em' />
            </ExternalLink>
            <ExternalLink href='/'>
              <FaTwitter size='2em' />
            </ExternalLink>
            <ExternalLink href='/'>
              <FaInstagram size='2em' />
            </ExternalLink>
            <ExternalLink href='/'>
              <FaYoutube size='2em' />
            </ExternalLink>
          </IconsContainer>
        </LinksMedia>

      </Footer>

      <CopyrightsPanel className='copyrights'>
        <CopyrightsText className='copyrights__text'>© 2020 Created By Piotr Wiśniewski.</CopyrightsText>
      </CopyrightsPanel>
    </>
  )
}

export default LandingPage2
