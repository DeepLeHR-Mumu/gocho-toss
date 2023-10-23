// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2d6adc0b3c7c2b030b54d10e56c97a73@o4505287242678272.ingest.sentry.io/4506098281086976",
  tracesSampleRate: 1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  debug: false,
});
