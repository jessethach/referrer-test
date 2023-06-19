import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Test Referrer" />
        <a href={process.env.NEXT_PUBLIC_SITE_URL}>To Intake App</a>
      </main>

      <Footer />
    </div>
  )
}
