import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>블랙클로버 모바일 : The Opening of Fate</title>
      </Head>
      <Component {...pageProps} />
    </>
  )


}

export default MyApp
