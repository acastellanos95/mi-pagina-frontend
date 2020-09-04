import Layout from "../components/layout";
import utilStyles from '../styles/about-me.module.css';
import styles from '../styles/about-me-layout.module.css';

export default function AboutMe(){
  return(
    <Layout>
      <Head>
        <title>André Castellanos: About Me</title>
        <link rel="canonical" href="https://andrecastellanos.dev/about-me"/>
        <link rel="publisher" href="https://andrecastellanos.dev/"/>
        <meta name="rating" content="general"/>
        <meta name="author" content="André Castellanos"/>
        <meta name="designer" content="acastellanosaldama@gmail.com"/>
        <meta name="revisit-after" content="1 day"/>
        <meta name="robots" content="All"/>
        <meta name="keywords" content="blog, andre, castellanos, programación, ingenieria, software, fisica"/>
        <meta name="description" content="Soy ingeniero en software y físico-matemático, creo aplicaciones web y aplicaciones numéricas a tu disposición."/>
        <meta property="og:title" content="André Castellanos: Mis projectos"/>
        <meta property="og:locale" content="es_MX"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Soy freelancer, ingeniero en software y físico-matemático. Creo aplicaciones web y aplicaciones numéricas a tu servicio."/>
        <meta property="og:url" content="https://andrecastellanos.dev/about-me"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
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