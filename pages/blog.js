import Layout from "../components/layout";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import NavBlog from "../components/navBlog";
import Head from "next/head";
import Articles from "../components/Articles";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/article/articles";



export default function Blog(){
  return(
    <Layout>
      <Head>
        <title>André Castellanos: Blog</title>
        <link rel="canonical" href="https://www.andrecastellanos.dev/blog"/>
        <link rel="publisher" href="https://www.andrecastellanos.dev/"/>
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
        <meta property="og:url" content="https://www.andrecastellanos.dev/blog"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      {/* <NavBlog /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </Layout>
  );
}