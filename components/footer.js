import Styles from './footer.module.css';

export default function Footer(){
  return(
    <footer className={Styles.footer}>
      <a className={Styles.footerText} href="https://www.facebook.com/andredevanymin" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
      <a className={Styles.footerText} href="https://wa.me/5212212851045" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp fa-2x"></i></a>
      <a className={Styles.footerText} href="https://github.com/acastellanos95" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
      <a className={Styles.footerText} href="https://www.linkedin.com/in/acastellanos95/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
    </footer>
  )
}