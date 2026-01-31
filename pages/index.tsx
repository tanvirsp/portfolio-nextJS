import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Mir Raisul Tanvir | MERN Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Mir Raisul Tanvir | Fullstack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mir Raisul Tanvir | Fullstack Developer" />
        <meta name="description" content="Hey! I'm Mir Raisul Tanvir, and I'm a Fullstack developer" />

      </Head>
      <Home />
    </>
  );
}
