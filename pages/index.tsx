import Head from "next/head";
import React, { Fragment } from "react";
import Intro from "./../components/layout/Intro";
import Media from "./../components/layout/Media";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="./icon.jpeg" />
        <title>Jasurbek Aripov</title>
        <meta
          name="Jasurbek Aripov"
          content="Jasurbek Aripov's Intro Page of Portfolio"
        />
      </Head>
      <Intro />
      <Media />
    </Fragment>
  );
}

export default HomePage;
