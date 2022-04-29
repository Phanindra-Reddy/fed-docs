import Head from "next/head";

function HeadComp({ title, description }) {
  return (
    <>
      <Head>
        <title>{title && title } {description && " | " + description} </title>
        <meta
          name="description"
          content={description}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/fedicon.png" />
      </Head>
    </>
  );
}

export default HeadComp;
