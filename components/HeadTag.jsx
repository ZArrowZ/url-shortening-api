import Head from "next/head";

const HeadTag = () => {
  return (
    <Head>
      <title>Shortly</title>
      <meta
        name="description"
        content="Link shorteners work by transforming any long URL into a shorter and make it more readable."
      ></meta>
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default HeadTag;
