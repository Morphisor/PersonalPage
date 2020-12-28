import Head from 'next/head'
import Container from '../components/container'
import { ThemeContextProvider } from '../components/theme-provider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Augusto Gallitri</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </div>
  )
}
