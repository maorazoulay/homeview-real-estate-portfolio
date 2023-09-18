import { useRouter } from 'next/router'
import DashboardLayout from '@/components/DashboardLayout'
import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Page() {
  const router = useRouter()
  const { data: resonse, error } = useSWR(`/api/assets/${router.query.id}`, fetcher)
  const asset = resonse.data

  if (error) return <div>Failed to load</div>
  if (!resonse) return <div>Loading...</div>
  console.log(asset);

  return (
    <Link href={`/dashboard/assets/${asset._id}`}
      className="asset-link hvr-grow" key={asset._id}>
      <div className="relative w-full h-2/3">
        <Image
          src={asset.images[0]}
          alt="property image"
          fill
          priority
          className="rounded-xl border-b-indigo-950 border-b-2"
        />
      </div>
      <div className="w-full h-1/3 asset-info flex flex-col justify-center items-center gap-2 pt-8 pb-8 font-bold">
        <p>{asset.title}</p>
        <p>{asset.address}</p>
        <p>{asset.propertyType}</p>
      </div>
    </Link>
  )
}

// You should fetch data on the client side in here, use the SWR library:
// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-swr

Page.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}