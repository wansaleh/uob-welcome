import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/5b84ae3710.js"
            crossOrigin="anonymous"
          />

          <style>{`
            @keyframes move-forever {
              0% {
                transform: translate3d(-90px, 0, 0);
              }
              100% {
                transform: translate3d(85px, 0, 0);
              }
            }
          `}</style>

          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `var $buoop={required:{e:-4,f:-3,o:-3,s:-1,c:-3},insecure:!0,api:2020.08};function $buo_f(){var e=document.createElement("script");e.src="//browser-update.org/update.min.js",document.body.appendChild(e)}try{document.addEventListener("DOMContentLoaded",$buo_f,!1)}catch(e){window.attachEvent("onload",$buo_f)}`
                }}
              />

              <script src="//assets.adobedtm.com/4f0de1c2a678946ab5959eeb23f3c13fd6552995/satelliteLib-27e539a40079391d00d67113238af22ba9c90076.js" />

              <script
                dangerouslySetInnerHTML={{
                  __html: `!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-TV94J8",m.parentNode.insertBefore(r,m)}(window,document,"script","datalayer");`
                }}
              />
            </>
          )}
        </Head>
        <body>
          {/* <ColorModeScript initialColorMode="light" /> */}
          <Main />
          <NextScript />

          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: '_satellite.pageBottom();'
              }}
            />
          )}

          {/* <script src="./confetti.js" /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
