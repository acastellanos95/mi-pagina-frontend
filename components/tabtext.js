import Styles from './tabtext.module.css';

export default function Tabtext({props, children}){
  return(
    <div>
      <h5 className={Styles.tabtextWrapper}>{children}</h5>
    </div>
  )
}