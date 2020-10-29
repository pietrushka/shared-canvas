import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className="links-group">
        <h3 className='footer-heading'>wideboard.</h3>
        <li>
          <Link className='footer-link' to='/about'>About</Link>
        </li>
        <li>
          <Link className='footer-link' to='/contact'>Contact</Link>
        </li>
      </ul>
      <ul className="links-group">
        <h3 className='footer-heading'>Informations</h3>
        <li>
          <Link className='footer-link' to='/conditions'>Terms & Conditions</Link>
        </li>
        <li>
          <Link className='footer-link' to='/privacy'>Privacy Policy</Link>
        </li>
      </ul>

      <div className="links-media">
        <h3 className='footer-heading'>Join us!</h3>
        <div className="icons-container">
          <a href="https://www.facebook.com" className="external-link">
            <FaFacebook size='2em' />
          </a>
          <a href="https://twitter.com" className="external-link">
            <FaTwitter size='2em' />
          </a>
          <a href="https://www.instagram.com" className="external-link">
            <FaInstagram size='2em' />
          </a>
          <a href="https://www.youtube.com/" className="external-link">
            <FaYoutube size='2em' />
          </a>
        </div>
      </div>
    </footer>
  )
}