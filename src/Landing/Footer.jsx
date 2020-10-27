import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="links-group">
        <h3 className='footer-heading'>wideboard.</h3>
        <Link className='footer-link' to='/about'>About</Link>
        <Link className='footer-link' to='/contact'>Contact</Link>
      </div>
      <div className="links-group">
        <h3 className='footer-heading'>Informations</h3>
        <Link className='footer-link' to='/conditions'>Terms & Conditions</Link>
        <Link className='footer-link' to='/privacy'>Privacy Policy</Link>
      </div>

      <div className="links-media">
        <h3 className='footer-heading'>Join us!</h3>
        <div className="icons-container">
          <a href="/" className="external-link">
            <FaFacebook size='2em' />
          </a>
          <a href="/" className="external-link">
            <FaTwitter size='2em' />
          </a>
          <a href="/" className="external-link">
            <FaInstagram size='2em' />
          </a>
          <a href="/" className="external-link">
            <FaYoutube size='2em' />
          </a>
        </div>
      </div>
    </footer>
  )
}