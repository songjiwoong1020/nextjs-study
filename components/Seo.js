import Head from "next/head";

const Seo = ({title}) => {
  const titleTxt = `${title} | Next Movies`;
  return (
    <Head>
      <title>{titleTxt}</title>
    </Head>
  )
}

export default Seo;