import Layout from "../components/layout";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Row, Col, Container } from "reactstrap";
import Project from '../components/project';
import Head from "next/head";

const QUERY = gql`{projects {id title description project_image{url} url} }`;

export default function Projects(){
  const { loading, error, data } = useQuery(QUERY);
  if(error){
    return(
      <Layout>
        <h4>
          {error.message}
        </h4>
      </Layout>
    );
  }
  if(loading){
    return(
      <Layout>
        <h4>
          Loading...
        </h4>
      </Layout>
    );
  }
  if(data){
    return(
      <Layout>
        <Head>
          <title>André Castellanos: Projects</title>
          <link rel="canonical" href="https://www.andrecastellanos.dev/projects"/>
          <link rel="publisher" href="https://www.andrecastellanos.dev/"/>
          <meta name="rating" content="general"/>
          <meta name="author" content="André Castellanos"/>
          <meta name="designer" content="acastellanosaldama@gmail.com"/>
          <meta name="revisit-after" content="1 day"/>
          <meta name="robots" content="All"/>
          <meta name="keywords" content="andre, castellanos, portafolio, projectos, trabajos, web, diseño"/>
          <meta name="description" content="Soy ingeniero en software y físico-matemático, creo aplicaciones web y aplicaciones numéricas a tu disposición."/>
          <meta property="og:title" content="André Castellanos: Mis projectos"/>
          <meta property="og:locale" content="es_MX"/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content="Soy freelancer, ingeniero en software y físico-matemático. Creo aplicaciones web y aplicaciones numéricas a tu servicio."/>
          <meta property="og:url" content="https://www.andrecastellanos.dev/"/>
        </Head>
        <Container>
          <Row>
          {
            data.projects.map((project, index)=>{
              return(
                <Col key={project.id} md="4" lg="3" className="p-3">
                  <Project data={project} />
                </Col>
              );
            })
          }
          </Row>
        </Container>
      </Layout>
    );
  }
}