import { useRouter } from 'next/router'
import DashboardLayout from '@/components/layouts/DashboardLayout'
 
export default function Page() {
  const router = useRouter()
  return <p>ID: {router.query.id}</p>
}

// Add getStaticPaths function here...
//  see https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths

Page.getLayout = function getLayout(page){
  return (
      <DashboardLayout>{page}</DashboardLayout>
  )
}