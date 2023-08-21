import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import st_logo from '../assets/projects/st-logo.png';
import { Link } from 'react-scroll';
import { socialMedia } from '../data/data';
import './Navbar.css'
import { navlinks } from '../data/data';
import Resume from '../assets/Resume.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a href="/">
          <img src={st_logo} alt='Logo' style={{ width: '50px' }} />
        </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex customMenu'>
        {
          navlinks.map((links) => {
            return (
              <>
                <li className=' hover:border-b-2 border-slate-700 hover:text-white'>
                  <Link to={links.to} smooth={true} duration={500}>
                    {links.name}
                  </Link>
                </li>
              </>
            )
          })
        }
        <li className=' hover:border-b-2 border-slate-700 hover:text-white'>
          <a href={Resume} download={true}>Resume</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 z-10 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>

          {
            socialMedia.map((social) => {
              return (
                <>
                  <li className='w-[160px] h-[60px] z-40 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                    <a
                      className='flex justify-between items-center w-full text-gray-300'
                      href={social.link} target='_blank'
                    >
                      {social.name}
                      {social.svgIcon}
                    </a>
                  </li>
                </>
              )
            })
          }


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
