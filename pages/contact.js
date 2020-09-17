import Layout from "../components/layout";
import utilStyles from "../styles/about-me.module.css";
import styles from "../styles/about-me-layout.module.css";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>André Castellanos: Contact Me</title>
        <link rel="canonical" href="https://andrecastellanos.dev/contact" />
        <link rel="publisher" href="https://andrecastellanos.dev/" />
        <meta name="rating" content="general" />
        <meta name="author" content="André Castellanos" />
        <meta name="designer" content="acastellanosaldama@gmail.com" />
        <meta name="revisit-after" content="1 day" />
        <meta name="robots" content="All" />
        <meta
          name="keywords"
          content="blog, andre, castellanos, programación, ingenieria, software, fisica"
        />
        <meta
          name="description"
          content="Soy ingeniero en software y físico-matemático, creo aplicaciones web y aplicaciones numéricas a tu disposición."
        />
        <meta property="og:title" content="André Castellanos: Mis projectos" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Soy freelancer, ingeniero en software y físico-matemático. Creo aplicaciones web y aplicaciones numéricas a tu servicio."
        />
        <meta property="og:url" content="https://andrecastellanos.dev/" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <div
        style={{ textAlign: "center", padding: "10% 10%" }}
        className="container-fluid"
      >
        <h2>Tomemos un café y hablemos de proyectos</h2>
        <h4>
          <a href="tel:+5212212851045">221-285-1045</a>
        </h4>
        <h6>
          <a href="mailto:acastellanosaldama@gmail.com">
            acastellanosaldama@gmail.com
          </a>
        </h6>
      </div>
    </Layout>
  );
}
