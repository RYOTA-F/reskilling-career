import type { AppProps } from 'next/app'

/* styles */
import 'assets/globals.css'
import 'assets/blogBody.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
