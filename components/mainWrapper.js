import Styles from "./mainImg.module.css";

export default function MainWrapper() {
  return (
    <div className={Styles.imagebg}>
      <div className={Styles.wrapperText}>
        <h1>André Castellanos</h1>
        <h2>
          Computer Science Master's degree student at CINVESTAV-IPN and software engineer from
          México. Projects are in my github <a
          href="https://github.com/acastellanos95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={"fab fa-github fa-lg " + Styles.BtnItem}></i>
        </a>.
        </h2>
      </div>
      <div className={Styles.BtnWrapper}>
        <a
          href="https://www.facebook.com/andredevanymin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={"fab fa-facebook fa-lg " + Styles.BtnItem}></i>
        </a>
        <a
          href="https://wa.me/5212212851045"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={"fab fa-whatsapp fa-lg " + Styles.BtnItem}></i>
        </a>
        <a
          href="https://github.com/acastellanos95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={"fab fa-github fa-lg " + Styles.BtnItem}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/acastellanos95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={"fab fa-linkedin-in fa-lg " + Styles.BtnItem}></i>
        </a>
      </div>
    </div>
  );
}
