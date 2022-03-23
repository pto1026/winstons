import Head from "next/head";
import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Stats from "../components/stats";
import Features from "../components/features";
import How from '../components/how';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Winston&apos;s | Winston&apos;s personal import export service
        </title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <section className="section-stats u-text-center">
          <h2 className="heading-secondary section-stats__header">
            Why Winston&apos;s?
          </h2>
          <Stats />
        </section>
        <section className="section-features">
          <h2 className="heading-secondary section-features__header u-text-center">
            What we are
          </h2>
          <Features />
        </section>
        <section className="section-how">
          <h2 className="heading-secondary u-text-center section-how__header">
            How we do it
          </h2>
          <How />
        </section>
        <section className="section-testimonials">
          <h2 className="heading-secondary section-testimonials__header u-text-center">
            What people are saying
          </h2>
        </section>
      </main>
    </React.Fragment>
  );
}
