import Head from "next/head";

import {
  Header,
  Hero,
  About,
  Services,
  Portfolio,
  Team,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Deep Edge</title>
        <meta name="description" content="Creative Digital Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
