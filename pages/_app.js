import React from "react";
import Head from "next/head";
import '../styles/globals.css';
import withData from "../lib/apollo";
import App from 'next/app';
import Layout from '../components/layout';
import { ApolloProvider } from "@apollo/react-hooks";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <>
      <ApolloProvider client={apollo}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width shrink-to-fit=no" />
        <script src="https://kit.fontawesome.com/900ac71d5e.js" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
        {/* <link rel="stylesheet" href="/styles/argon-design-system.min.css" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default withData(MyApp);
