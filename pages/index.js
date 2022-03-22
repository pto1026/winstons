import Head from "next/head";
import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Stats from "../components/stats";
import Features from "../components/features";

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
          <div className="how u-grid-2">
            <div className="how__box">
              <p className="how__title">01 Negotiation</p>
              <p className="how__text">
                The first step is negotiation, we negotiatie on your behalf to
                find you the best price out there. We also leverage our status
                as the leader in personal import/export to pressure sellers into
                unbeatable prices.
              </p>
            </div>
            <div className="how__box">
              <img
                className="how__image"
                src="imgs/negotiation.jpg"
                alt="Two business men negotiiation, one holds a tablet."
              />
            </div>
            <div className="how__box">
              <img
                className="how__image"
                src="imgs/coordination.jpg"
                alt="Man using both a laptop and a cell phone at once to coordinate."
              />
            </div>
            <div className="how__box">
              <p className="how__title">02 Coordination</p>
              <p className="how__text">
                Next we coordinate pickup from the source, discreet
                international shipping, and delivery to the client. All
                accommodations are welcome so please ask, no task is too
                difficult.
              </p>
            </div>
            <div className="how__box">
              <p className="how__title">03 Shipping</p>
              <p className="how__text">
                We offer all levels of delivery service from simple postage mail
                to intensive surveilance and armed convoy transport. We also
                service every country on the globe, location is not an obstacle.
              </p>
            </div>
            <div className="how__box">
              <img
                className="how__image"
                src="imgs/shipping.jpg"
                alt="A shipping freighter on the open ocean."
              />
            </div>
            <div className="how__box">
              <img
                className="how__image"
                src="imgs/delivery.jpg"
                alt="Delivery driver driving a motorized scooter/bike through traffic."
              />
            </div>
            <div className="how__box">
              <p className="how__title">04 Delivery</p>
              <p className="how__text">
                When it comes to delivery we are just as flexible. Need it
                shipped by air, we can do that, need it delivered by submarine
                because of sanctions, we do that. Need a private helicopter care
                package, that too is possible.
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
