import Layout from "../components/layout";
import utilStyles from '../styles/about-me.module.css';
import styles from '../styles/about-me-layout.module.css';

export default function AboutMe(){
  return(
    <Layout>
      <div className={styles.header}>
        <img
          src="/images/profile.jpeg"
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt="andre-profile"
        />
        <h2 className={utilStyles.headingLg}>
          André Castellanos
        </h2>
        <p>
          Hello, I'm André Castellanos. I'm a physicist and a self-made software engineer that loves
          physics, problem solving and coding. I'm always learning new things because I love to learn.
          I have learnt many programming languages through my university education and self-taught:
          C++11, Fortran, Python 3, C# and JS.
        </p>
        <p>
          In my university education I was exposed to numerical computation using Fortran and developing
          typical numerical algorithms(root finding, derivation, integration, ODE). Then, I took a specialized
          class in simulation methods where we developed famous computational simulation algorithms in Python 3.
        </p>
        <p>
          I have gone to 4 schools where I developed my skills in numerical algorithms, machine learning and deep learning
          using many frameworks and libraries like ROOT, pytorch and tensorflow using C++ and python.
        </p>
      </div>
    </Layout>
  );
}