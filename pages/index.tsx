import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { getSlip } from "../src/services/slip";

interface Slip {
  id: number;
  advice: string;
}

interface State {
  slip?: Slip;
}

const Home: NextPage = () => {
  const [{ slip }, setSlip] = useState<State>({ slip: undefined });

  useEffect(() => {
    updateSlip();
  }, []);

  const updateSlip = () => {
    setSlip({ slip: undefined });

    getSlip().then((data) => {
      setSlip(data);
    });
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/favicon-32x32.png" />
      </Head>

      <main>
        <article className="advice-slip">
          <h4 className="advice-slip__title">ADVICE #{slip?.id}</h4>
          <h2 className="advice-slip__content">
            {slip ? `"${slip?.advice}"` : "Loading..."}
          </h2>
          <img
            className="advice-slip__divider"
            src="/images/pattern-divider-mobile.svg"
            srcSet="/images/pattern-divider-mobile.svg 375w, /images/pattern-divider-mobile.svg 1440w"
          />
          <br />
          <button className="advice-slip__button" onClick={updateSlip}>
            <img src="/images/icon-dice.svg" />
          </button>
        </article>
      </main>

      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  );
};

export default Home;
