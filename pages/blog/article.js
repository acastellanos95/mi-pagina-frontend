import { useRouter } from "next/router";
import Query from "../../components/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import styles from '../../styles/container.module.css'

const Article = () => {
  const router = useRouter();
  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { article } }) => {
        const imageUrl = process.env.NEXT_PUBLIC_API_URL + article.image.url;
        const Categories = article.categories.map((category)=>{
          return category.name;
        })
        console.log(Categories)
        return (
          <Layout>
            <Head>
              <title>André Castellanos: {article.title}</title>
              <link rel="canonical" href={"https://andrecastellanos.dev/blog/article?id="+article.id}/>
              <link rel="publisher" href="https://andrecastellanos.dev/"/>
              <meta name="rating" content="general"/>
              <meta name="author" content="André Castellanos"/>
              <meta name="designer" content="acastellanosaldama@gmail.com"/>
              <meta name="revisit-after" content="1 day"/>
              <meta name="robots" content="All"/>
              <meta name="keywords" content={"blog, andre, castellanos, programación, ingenieria, software, fisica, "+Categories.join(",")}/>
              <meta name="description" content="Soy ingeniero en software y físico-matemático, creo aplicaciones web y aplicaciones numéricas a tu disposición."/>
              <meta property="og:title" content={"André Castellanos: "+article.title}/>
              <meta property="og:locale" content="es_MX"/>
              <meta property="og:type" content="website"/>
              <meta property="og:description" content={article.title}/>
              <meta property="og:url" content={"https://andrecastellanos.dev/blog/article?id="+router.query.id} />
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
              <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
            </Head>
                <div
                  id="banner"
                  className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin p-5"
                  data-src={imageUrl}
                  data-srcset={imageUrl}
                  data-uk-img
                >
                  <h1>{article.title}</h1>
                </div>

                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown source={article.content} />
                    <p>
                      <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                    </p>
                    <Link href="/blog"><a>Return to blog</a></Link>
                  </div>
                </div>
          </Layout>
        );
      }}
    </Query>
  );
};

export default Article;