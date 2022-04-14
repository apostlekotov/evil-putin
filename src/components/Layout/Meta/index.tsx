import Head from "next/head";

export const Meta: React.FC = () => (
  <Head>
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://www.evilputin.io' />
    {/* <meta property='og:image' content='/img/evil-putin-thumbnail.webp' /> */}
    <meta property='og:title' content='Evil Putin™' />
    {/* <meta property='og:description' content='' /> */}
    {/* <meta property='og:site_name' content='Evil Putin™' /> */}
    <meta property='twitter:card' content='summary' />
    <meta property='twitter:site' content='@_EvilPutin' />
    {/* <meta property='twitter:image' content='/img/evil-putin-thumbnail.webp' /> */}
    <meta property='twitter:title' content='Evil Putin™' />
    {/* <meta property='twitter:description' content='' /> */}

    {/* <meta name='description' content='' /> */}
    {/* <meta name='keywords' content='support ukraine evil putin' /> */}

    <link
      rel='apple-touch-icon'
      sizes='120x120'
      href='/favicon/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/favicon/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/favicon/favicon-16x16.png'
    />
    <link rel='manifest' href='/favicon/site.webmanifest' />
    <link
      rel='mask-icon'
      href='/favicon/safari-pinned-tab.svg'
      color='#BEFD37'
    />
    <link rel='shortcut icon' href='/favicon/favicon.ico' />
    <meta name='apple-mobile-web-app-title' content='Evil Putin' />
    <meta name='application-name' content='Evil Putin' />
    <meta name='msapplication-TileColor' content='#BEFD37' />
    <meta name='theme-color' content='#BEFD37'></meta>
  </Head>
);
