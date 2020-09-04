import Layout from "../components/layout";
import utilStyles from '../styles/about-me.module.css';
import styles from '../styles/about-me-layout.module.css';

export default function Contact(){
  return(
    <Layout>
    <div style={{textAlign: "center", padding: "10% 10%"}} className="container-fluid">
      <h2>
        Tomemos un café y hablemos de proyectos
      </h2>
      <h4><a href="tel:+5212212851045">221-285-1045</a></h4>
      <h6><a href="mailto:acastellanosaldama@gmail.com">acastellanosaldama@gmail.com</a></h6>
    </div>
    </Layout>
  );
}