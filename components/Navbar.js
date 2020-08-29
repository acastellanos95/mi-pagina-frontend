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
      <NavbarBrand className={Styles.mainName}><Link href="/"><a>{"{a};"}</a></Link></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className={Styles.navLinks}><Link href="/cv"><a>CV</a></Link></NavLink>
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