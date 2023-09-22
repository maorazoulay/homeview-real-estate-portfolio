import { useRouter } from 'next/router'
import DashboardLayout from '@/components/DashboardLayout'
import useSWR from 'swr'
import SimpleImageSlider from "react-simple-image-slider";
import { priceFormatter, dateFormatter } from '@/utils/formUtils';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const images = [
  { url: "/3.webp" },
  { url: "/4.webp" },
  { url: "/5.webp" },
  { url: "/6.webp" },
  { url: "/7.webp" },
  { url: "/8.webp" },
  { url: "/9.webp" },
];
export default function Page() {
  const router = useRouter()
  const { id } = router.query

  const { data: response, error } = useSWR(id ? `/api/assets/${router.query.id}` : null, id ? fetcher : null)
  const asset = response?.data

  if (error) return <div>Failed to load</div>
  if (!response) return <div>Loading...</div>

  return (
    <div className='h-full pt-2'>
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-indigo-700 overline'>{asset.title}</h1>
      <div className='h-95% lg:h-9/10 flex flex-col items-center lg:flex-row justify-center px-3 pt-2 lg:p-5 gap-4 sm:gap-2 lg:mt-4'>
        <div className='w-full h-2/3 lg:h-full'>
          <SimpleImageSlider
            width={'100%'}
            height={'100%'}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{ perspective: '1px', borderRadius: '0.75rem'}}
          />
        </div>
        <div className='flex flex-col w-full h-full justify-between bg-indigo-50 rounded-xl p-3'>
          <ul className='text-1xl sm:text-2xl'>
            <li className='border-b-2 py-3 border-indigo-500'> <span className='font-bold underline'>Address:</span> {asset.address}</li>
            <li className='border-b-2 py-3 border-indigo-500'><span className='font-bold underline'>Property Type:</span> {asset.propertyType}</li>
            <li className='border-b-2 py-3 border-indigo-500'><span className='font-bold underline'>Purchase Price:</span> {priceFormatter(asset.purchasePrice)}</li>
            <li className='border-b-2 py-3 border-indigo-500'><span className='font-bold underline'>Purchase Date:</span> {dateFormatter(asset.purchaseDate)}</li>
            <li className='border-b-2 py-3 border-indigo-500'><span className='font-bold underline'>Market Value:</span> {priceFormatter(asset.marketValue)}</li>
          </ul>
          <div className='flex justify-center border-t-2 border-indigo-600 p-2 gap-8'>
            <button
              className="hvr-buzz-out bg-indigo-700 text-white active:bg-indigo-900 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">Edit Asset
            </button>
            <button
              className="hvr-buzz-out bg-red-600 text-white active:bg-red-800 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">Delete Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// You should fetch data on the client side in here, use the SWR library:
// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-swr

Page.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}