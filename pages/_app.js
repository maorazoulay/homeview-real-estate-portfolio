import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}

// TODO: Authenticatation
// TODO: MongoDB integration with mocked data
// TODO: build out API
// TODO: Add option to add assets