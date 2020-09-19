import Layout from "../components/layout";
import { Row, Col, Container } from "reactstrap";
import Project from "../components/project";
import Head from "next/head";

export async function getStaticProps(context) {
  const res = await fetch("https://admin.andrecastellanos.dev/projects");
  const projects = await res.json();
  return {
    props: {
      projects,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
}

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>André Castellanos: Projects</title>
        <link rel="canonical" href="https://andrecastellanos.dev/projects" />
        <link rel="publisher" href="https://andrecastellanos.dev/" />
        <meta name="rating" content="general" />
        <meta name="author" content="André Castellanos" />
        <meta name="designer" content="acastellanosaldama@gmail.com" />
        <meta name="revisit-after" content="1 day" />
        <meta name="robots" content="All" />
        <meta
          name="keywords"
          content="andre, castellanos, portafolio, projectos, trabajos, web, diseño"
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
      </Head>
      <Container>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col key={project.id} md="4" lg="3" className="p-3">
                <Project data={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
}
