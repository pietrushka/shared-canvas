import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Navbar = styled.nav`
  font-size: 1rem;
  width: 100vw;
  height: 3.5em;
  z-index: 100;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-grey);
  border-bottom-left-radius: .4em;
  border-bottom-right-radius: .4em;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
export const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (min-width: 768px) {
    width: 95%;
  }
`

export const NavbarLogo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--black);

  @media (min-width: 1200px) {
    font-size: 2.25rem;
  }
`

export const Hamburger = styled.button`
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 2.5em;
  background: transparent;
  cursor: pointer;
  transition: all .5s ease-in-out;
  z-index: 110;

  @media (min-width: 768px) {
    display: none;
  }
`

export const HamburgerInner = styled.div`
  width: 100%;
  height: .3em;
  background: black;
  border-radius: 5px;
  transition: all .5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: .3em;
    background: black;
    border-radius: 5px;
    transition: all .5s ease-in-out;
  }

  &::before {
    transform: translateX(-20px) translateY(-11px);
  }

  &::after {
    transform: translateX(-20px) translateY(11px);
  }
    
  /* ANIMATION */
  &[open] {
  transform: translateX(50px);
  background: transparent;
  box-shadow: none;

    &::before {
      transform: translate(-70px, 0px) rotate(-45deg);
    }

    &::after {
      transform: translate(-70px, 0px) rotate(45deg);
    }
  }
`

const MenuHorizontal = css`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.1rem;

    li {
      margin-left: .75em;
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
    li {
      margin-left: 1em;
    }
  }
`
const MenuVertical = css`
  padding-left: 0;
  flex-direction: column;
  font-size: 2rem;
  li {
    margin-bottom: 1.5em;
  }
`
export const Menu = styled.ul`
  
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;


  ${props => props.horizontal ? MenuHorizontal : MenuVertical}
`

export const MenuOptionBasic = styled(Link)` 
  cursor: pointer;
  color: var(--black);

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background-color: var(--violet-light);
    transition: width .3s;
  }

  &:hover::after {
    width: 100%;
  }
`

export const MenuOptionBold = styled(Link)`
  cursor: pointer;
  color: var(--violet-light);
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background-color: var(--violet-light);
    transition: width .3s;
  }

  &:hover::after {
    width: 100%;
  }
`

export const MenuOptionBtn = styled(Link)` 
  cursor: pointer;
  border-radius: .7em;
  padding: .3em .5em;
  background: var(--violet-light);
  color: var(--bg-grey);
  font-weight: 700; 
  border: 2px solid var(--violet-light);
  transition: all .3s;

  &:hover {
    background: var(--bg-grey);
    color: var(--violet-light);
  }
`

export const OverlayMenu = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  height: 100vh;
  z-index: 50;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ececec;
  transform: translateY(100%);
  transform-origin: bottom;
  transition: .5s transform;

  &[open] {
    transform: translateY(0); 
  }
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 4rem;
  max-width: 1300px;

  @media (min-width: 400px) {
    height: auto;
  }
  
  @media (min-width: 768px) {
    padding-top: 4em;
    padding-bottom: 2em;
    max-height: 100vh;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1200px) {
    padding-top: 3em;
    width: 1200px;
    margin: auto;
    margin: auto;
  }
`

export const Text = styled.div`
  font-size: 1rem;
  padding-top: 1em;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  @media (min-width: 350px) {
    font-size: 1.2rem;
  }
  
  @media (min-width: 768px) {
    padding-top: 0;
    align-items: flex-start;
    padding-left: 1em;
    width: 45%;
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
    padding-left: 2em;
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
`

export const HeroHeading = styled.h1`
  font-weight: 700;
  font-size: 1.6em;
  margin-bottom: .5em;
  color: #323232;
  text-align: center;
   @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
   }
`

export const TextLine = styled.div`
  overflow: hidden;

`

export const TextInner = styled.div`
`

export const HeroParagraph = styled.p`
  font-size: .8em;
  margin: 1em 0;
  width: 80%;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin: 1.2em 0;
    width: 100%;
  }
`

export const FindOutBtn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: .7em;
  padding: .5em .8em;
  background: var(--violet-light);
  color: var(--bg-grey);
  font-weight: 700;
  outline: none;
  transition: all .3s;
  border: 2px solid var(--violet-light);
  margin-top: 2em;
  
  &:hover {
    background: var(--bg-grey);
    color: var(--violet-light);
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: 0;
  }
`

export const Images = styled.div`
  font-size: 1rem;
  height: auto;

  @media (min-width: 768px) {
    width: 55%
  }
`

export const ImagesContainer = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: 0;
  padding-bottom: 86%;
  overflow: hidden;
  font-size: 1rem;
`

export const ImagesInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const TabletImage = styled.div`
  font-size: 1em;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 13%;
  top: 15%;
  background: white;
  width: 27%;
  height: 22%;
  transform: skew(15deg);
  border-radius: .3em;
  border: .15em solid #6c63ff;
  border-left: .5em solid var(--violet-light);
  border-right: .5em solid var(--violet-light);
`
export const TabletScreen = styled.div`
  width: 100%;
    
  svg {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    max-height: 100%;
    max-width: 100%;
  }
`

export const PhoneImage = styled.div`
  font-size: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  right: 6%;
  top: 50%;
  transform: skew(12deg) translateY(-50%);
  margin-left: auto;
  background: white;
  width: 13.5%;
  height: 24%;
  border-radius: 5%;
  border: .15em solid #6c63ff;
  border-bottom: .3em solid var(--violet-light);
  border-top: .3em solid var(--violet-light);
`

export const PhoneScreen = styled.div`
  width: 100%;

  svg {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    max-height: 100%;
    max-width: 100%;
  }
`

export const LaptopImage = styled.div`
  position: absolute;
  left: 16%;
  top: 55%;
  width: 68%;
  height: 31%;
`

export const LaptopTopEl = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58%;
  height: 90%;
  transform: skew(20deg);
  background: white;
  border-top-left-radius: .3em;
  border-top-right-radius: .3em;
  border: .2em solid var(--violet-light);
  border-bottom: .3em solid var(--violet-light);
  border-top: .3em solid var(--violet-light);
`

export const LaptopScreen = styled.div`
  width: 100%;

  svg {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    max-height: 100%;
    max-width: 100%;
  }
`

export const LaptopBottomEl = styled.div`
  margin-left: 7%;
  width: 90%;
  height: 10%;
  background: var(--violet-light);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &::after {
    content: '';
    display: block;
    border-bottom-left-radius: 5px;
    background: var(--violet-dark);
    width: 60%;
    height: 100%;
  }
`

export const CurvedSVG = styled.svg`
  margin-top: -1px;
  margin-bottom: -1px;

background: var(--bg-grey);
  path{
    fill: var(--icon-color);
  } 
  display: block;
`

export const Newsletter = styled.section`
  font-size: 1rem;
  background: var(--icon-color);
  padding-top: 4em;
  padding-bottom: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;

  media (min-width: 1200px) {
    font-size 1.2rem;
  }
`

export const NewsletterHeading = styled.h2`
  color: var(--bg-grey);
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
`

export const NewsletterParagraph = styled.p`
  color: var(--bg-grey);
  margin: 0 0 1em 0;
  font-size: 1.1em;

  span {
    color: var(--black);
    font-weight: 700;
  }
`

export const NewletterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 60%;

  @media (min-width: 992px) {
    width: 30%;
  }
`

export const NewletterInput = styled.input`
  display: block;
  font-size: 1.25rem;
  width: 100%;
  margin: .5em;
  height: 2em;
  padding-left: .5em;
  background-color: #f3f3f3;
  max-width: 450px;

  border-radius: .3em;
  transition: all 250ms ease-in-out;
  
  &:focus {
    outline: none;
  }
`

export const NewletterBtn = styled.button`
  margin-top: 1em; 
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: .7em;
  padding: .5em 1em;
  border: none;
  background:  var(--bg-grey);
  color: var(--violet-light);
  font-weight: 700;

  border: 5px solid var(--bg-grey);
  transition: all .3s;

  &:hover {
    background: var(--violet-light);
    color: var(--bg-grey);
  }
`

export const Footer = styled.footer`
  font-size: 1rem;
  position: relative;
  background: var(--bg-grey);
  padding-bottom: 3em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

`

export const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2em 0 0 0;
`

export const FooterLink = styled(Link)`
  font-size: 1.5rem; 
  display: block;
  margin-bottom: .1em;
  color: var(--icon-color);
  border: 2px solid var(--bg-grey);
  padding: .1em;
  transition: border .3s;

  &:hover {
    border-bottom: 2px solid var(--violet-light);
  }
`

export const FooterHeading = styled.h3`
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  color: var(--black);
  margin: 0 0 .3em 0;

  @media(min-width: 400px) {
    text-align: left;
  }
`

export const LinksMedia = styled.div`
  width: 100%;
  margin-top: 2em;

  h3 {
    text-align: center;
  }
`

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ExternalLink = styled.a`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  margin-right: 1em;
  border-radius: 50%;
  background: #f5f5f5;
  transition: all .3s;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    color: var(--icon-color);
  }

  &:hover {
    background: var(--icon-color);
    svg {
      color: #f5f5f5;
    }
  }
  
`

export const CopyrightsPanel = styled.div`
  font-size: .8rem;
  color: var(--grey);
  bottom: 0;
  width: 100%;
  height: 1.2em;
  background-color: var(--violet-dark);
`
export const CopyrightsText = styled.p`
  text-align: center;
  margin: 0;
`
