import { useRouter } from 'next/router'
import DashboardLayout from '@/components/DashboardLayout'
 
export default function Page() {
  const router = useRouter()
  return <p>ID: {router.query.id}</p>
}

// You should fetch data on the client side in here, use the SWR library:
// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-swr

Page.getLayout = function getLayout(page){
  return (
      <DashboardLayout>{page}</DashboardLayout>
  )
}