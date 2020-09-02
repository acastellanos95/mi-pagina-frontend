import Head from 'next/head';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {useState, useEffect} from 'react';
import Styles from './navbar.module.css';
import Headroom from 'headroom.js';


export default function NavHome(){
  useEffect(()=>{
    let options = {
      // vertical offset in px before element is first unpinned
      offset : 0,
      // scroll tolerance in px before state changes
      tolerance : 0,
      // or you can specify tolerance individually for up/down scroll
      tolerance : {
          up : 5,
          down : 0
      },
      // css classes to apply
      classes : {
          // when element is initialised
          initial : "headroom",
          // when scrolling up
          pinned : "headroom--pinned",
          // when scrolling down
          unpinned : "headroom--unpinned",
          // when above offset
          top : "headroom--top",
          // when below offset
          notTop : "sticky-top",
          // when at bottom of scoll area
          bottom : "headroom--bottom",
          // when not at bottom of scroll area
          notBottom : "headroom--not-bottom",
          // when frozen method has been called
          frozen: "headroom--frozen",
          // multiple classes are also supported with a space-separated list
          pinned: "headroom--pinned foo bar"
      },
      // callback when pinned, `this` is headroom object
      onPin : function() {},
      // callback when unpinned, `this` is headroom object
      onUnpin : function() {},
      // callback when above offset, `this` is headroom object
      onTop : function() {
      },
      // callback when below offset, `this` is headroom object
      onNotTop : function() {
      },
      // callback when at bottom of page, `this` is headroom object
      onBottom : function() {},
      // callback when moving away from bottom of page, `this` is headroom object
      onNotBottom : function() {}
    };
    let myElement = document.getElementById("navbar");
    let headroom = new Headroom(myElement, options);
    headroom.init();
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className={Styles.container} color="white" light expand="md" id="navbar">
      <NavbarBrand className={Styles.mainName}><Link href="/"><a>{"{a};"}</a></Link></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className={Styles.navLinks}><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1sCHyJpq87VKnGW3nmhM01ti48QiJ2Z1y/view?usp=sharing">CV</a></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/projects"><a>Projects</a></Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/blog"><a>Blog</a></Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/about-me"><a>About me</a></Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/contact"><a>Contact</a></Link></NavLink>
          </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
  );
}