import { maxHeight } from '@mui/system';
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
            <h1>Home</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/work-experience' activeStyle>
            Work Experience
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          {/* <NavLink to='/contact-me' activeStyle>
            Contact Me
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact-me'>Contact Me</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;