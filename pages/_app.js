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

// TODO: Add more NextAuh providers
// TODO: Style Log In page
// TODO: NextAuh - redirect to sign in page when not logged in
// TODO: Style Account tab in sidebar
// TODO: Create Asset page with update and delete functionality
// TODO: Fix Topbar - Add filters?
// configure cache control headers for SSR, see: https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist#caching
// Add the env variable NEXTAUTH_URL='cannonical URL' in production? - env vars in Vercel Dashboard