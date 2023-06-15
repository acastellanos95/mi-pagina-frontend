import Link from 'next/link';
import NavHome from './Navbar';
import Footer from './footer';

export default function Layout({ children}) {
  
  return (
    <div>
      <NavHome />
      <div>{children}</div>
      <Footer/>
    </div>
  )
}