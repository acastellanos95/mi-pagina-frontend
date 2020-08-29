import Styles from './background.module.css';

export default function Background(){
  return(
    <div className={Styles.mainTextWrapper}>
      <h3>
        Background
      </h3>
      <h5>
        Studied physics at BUAP where I learnt my first programming language (C++98). From there I began a journey seeking myself to get into some kind of software and programming development using physics.
        The first thing I developed was an LHC detector simulation from then I wrote programs about computational simulation theory where it all ended in my undergraduate thesis in molecular simulation. <i class="fas fa-rocket"></i>
      </h5>
    </div>
  )
}