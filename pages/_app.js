import '../styles/globals.css'

//wrapping our app inside provider

import { Provider } from 'next-auth/client'
function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
    <Component {...pageProps} />
    </Provider>
  );
}

export default App
