import Layout from "../components/layout";
import styles from '../styles/about-me-layout.module.css';
import utilStyles from '../styles/about-me.module.css';
import { Container } from "reactstrap";

export default function Error(){
  return(
    <Layout>
      <Container>
        <div className={styles.header}>
          <h1 className={utilStyles.headingLg}>
            Oops!! You're not supposed to be here.
          </h1>
          <img src="/images/2488756.jpg" className="img-fluid"/>
        </div>
      </Container>
    </Layout>
  );
}