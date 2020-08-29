import Styles from './mainImg.module.css';

export default function MainWrapper(){
  return(
    <div className={Styles.imagebg}>
          <div className={Styles.wrapperText}>
            <h3 className={Styles.mainTitle}>
              André Castellanos
            </h3>
            <h5 className={Styles.mainDescription}>
            Undergraduate Physicist and self-learning software engineer from México.
            </h5>
          </div>
          <div className={Styles.BtnWrapper}>
            <a href="https://www.facebook.com/andredevanymin" target="_blank"><i className={"fab fa-facebook fa-lg "+Styles.BtnItem}></i></a>
            <a href="https://wa.me/5212212851045" target="_blank"><i className={"fab fa-whatsapp fa-lg "+Styles.BtnItem}></i></a>
            <a href="https://github.com/acastellanos95" target="_blank"><i className={"fab fa-github fa-lg "+Styles.BtnItem}></i></a>
            <a href="https://www.linkedin.com/in/acastellanos95/" target="_blank"><i className={"fab fa-linkedin-in fa-lg "+Styles.BtnItem}></i></a>
          </div>
        </div>
  );
}