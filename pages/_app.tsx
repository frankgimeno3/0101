import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Tecnobolsa</title>
        <link rel="icon" href="/icons/appicon.jpg" />
      </Head>

    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>

  )
}
