import Head from 'next/head';
import Layout from '../components/layout';
import MainWrapper from "../components/mainWrapper";
import Background from '../components/background';
import Expertise from '../components/expertise'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>André Castellanos: Home</title>
          <link rel="canonical" href="https://andrecastellanos.dev/"/>
          <link rel="publisher" href="https://andrecastellanos.dev/"/>
          <meta name="rating" content="general"/>
          <meta name="author" content="André Castellanos"/>
          <meta name="designer" content="acastellanosaldama@gmail.com"/>
          <meta name="revisit-after" content="1 day"/>
          <meta name="robots" content="All"/>
          <meta name="keywords" content="programador, freelancer, ingeniero, software, web, aplicaciones, fisico, matematico, freelance, diseño, paginas, CDMX, Mexico, puebla, cordoba, veracruz, andre, castellanos, C++, CUDA, python, react, backend"/>
          <meta name="description" content="Soy ingeniero en software y físico-matemático, creo aplicaciones web y aplicaciones numéricas a tu disposición."/>
          <meta property="og:title" content="André Castellanos: Programador y físico-matemático"/>
          <meta property="og:locale" content="es_MX"/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content="Soy freelancer, ingeniero en software y físico-matemático. Creo aplicaciones web y aplicaciones numéricas a tu servicio."/>
          <meta property="og:url" content="https://andrecastellanos.dev/"/>
        </Head>
        <MainWrapper />
        <Background />
        <Expertise />
    </Layout>
  )
}
