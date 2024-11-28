import type { AppProps } from 'next/app'
import '../styles/globals.css'  // We'll create this next

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
