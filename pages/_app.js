import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}

// TODO: Authenticatation
// TODO: Use Authenticatation to get userId
// TODO: build out API - WIP

// Tech Debt:
// Fix assets layout when there is less than 3 items in one row
// Fix Image dimensions in assets page - contain the image in a div and use fill