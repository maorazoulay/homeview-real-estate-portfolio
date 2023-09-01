import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'


export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>)
}

// TODO: Add Asset for:
  // TODO: Change layout - use generic form with a submit input
  // TODO: Don't use a state - just handle the onSubmit
  // TODO: Host the images and get the paths
  // TODO: Append the userId and image paths
// TODO: overview - connect numbers to assets

// Tech Debt:
// configure cache control headers for SSR, see: https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist#caching
// Fix assets layout when there is less than 3 items in one row
// Fix Image dimensions in assets page - contain the image in a div and use fill
// Add the env variable NEXTAUTH_URL='cannonical URL' in production? - env vars in Vercel Dashboard