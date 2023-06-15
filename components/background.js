import Styles from './background.module.css';

export default function Background(){
  return(
    <div className={Styles.mainTextWrapper}>
      <h5>
        Background
      </h5>
      <p>
        Currently a Computer Science MSc student at CINVESTAV-IPN specializing in High Performance Computing and numerical methods. I worked as a .NET fullstack developer at Telegestion México. <i className="fas fa-rocket"></i>
      </p>
    </div>
  )
}