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
import {useState} from 'react';
import Styles from './navbar.module.css';

export default function NavHome(){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className={Styles.container} color="white" light expand="md">
      <NavbarBrand className={Styles.mainName}><Link href="/">{"{a};"}</Link></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/cv">CV</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/projects">Projects</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/blog">Blog</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/about-me">About me</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/contact">Contact</Link></NavLink>
          </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
  );
}