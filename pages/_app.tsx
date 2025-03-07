import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../component/layout";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { basePath } = useRouter(); // Get basePath dynamically

  return (
    <Layout>
      <Head>
        {/* Use basePath for GitHub Pages compatibility */}
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <title>Raman Temre</title>
        <meta name="description" content="My portfolio site" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
