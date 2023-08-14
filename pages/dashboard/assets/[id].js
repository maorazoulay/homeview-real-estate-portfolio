import { useRouter } from 'next/router'
import DashboardLayout from '@/components/layouts/DashboardLayout'
 
export default function Page() {
  const router = useRouter()
  return <p>ID: {router.query.id}</p>
}

Page.getLayout = function getLayout(page){
  return (
      <DashboardLayout>{page}</DashboardLayout>
  )
}