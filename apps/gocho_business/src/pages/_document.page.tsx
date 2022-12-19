import { Html, Main, NextScript, Head } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Script
          id="channelTalk"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: ` (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "2d10c61f-6ad5-4f39-84f3-d84bf2eaf103"
  });`,
          }}
        />

        <div id="modalPortal" />
        <div id="toastPortal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
