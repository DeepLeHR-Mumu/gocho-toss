// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2d6adc0b3c7c2b030b54d10e56c97a73@o4505287242678272.ingest.sentry.io/4506098281086976",
  tracesSampleRate: 0.3,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
});
