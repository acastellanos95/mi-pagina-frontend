import Head from 'next/head';
import Layout from '../components/layout';
import MainWrapper from "../components/mainWrapper";
import Background from '../components/background';
import Expertise from '../components/expertise'

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainWrapper />
        <Background />
        <Expertise />
    </Layout>
  )
}
