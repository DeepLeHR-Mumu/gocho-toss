import '../styles/globals.css'
import type { AppProps } from 'next/app'

function BusinessService({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default BusinessService
