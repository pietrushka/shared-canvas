import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPlusCircle, faAddressBook, faBookmark, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



import './Navbar.css'


const Navbar = () => (
   <div className='navbar'>
      <ul className='navbar-nav'>

        <li class="logo">
        <a href="#" class="nav-link">
          <span class="link-text logo-text">SPLITER</span>
{/*           

          Add here some decent logo 

          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
         */}
        </a>
      </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <FontAwesomeIcon className='nav-icon' icon={faUser} size='2x'/>
            <span class="link-text">User</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <FontAwesomeIcon className='nav-icon' icon={faPlusCircle} size='2x'/>
            <span class="link-text">Call</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <FontAwesomeIcon className='nav-icon' icon={faAddressBook} size='2x'/>
            <span class="link-text">Contacts</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <FontAwesomeIcon className='nav-icon' icon={faBookmark} size='2x'/>
            <span class="link-text">Saved</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <FontAwesomeIcon className='nav-icon' icon={faTimesCircle} size='2x'/>
            <span class="link-text">Quit</span>
          </a>
        </li>


     </ul>
   </div>
)

export default Navbar