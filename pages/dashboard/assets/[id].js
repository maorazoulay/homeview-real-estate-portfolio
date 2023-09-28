import { useState } from "react";
import { useRouter } from 'next/router'
import DashboardLayout from '@/components/DashboardLayout'
import useSWR from 'swr'
import SimpleImageSlider from "react-simple-image-slider";
import { priceFormatter, dateFormatter } from '@/utils/formUtils';
import ConfirmationDialog from '@/components/ConfirmationDialog';
import Spinner from "@/components/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Page() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const { id } = router.query

  const { data: response, error } = useSWR(id ? `/api/assets/${router.query.id}` : null, fetcher)
  const asset = response?.data

  if (error) return <div>Failed to load</div>
  if (!response) return <Spinner />

  const images = asset.images.map(image => {
    return { url: image }
  })

  function editAsset() {

  }

  function deleteAsset() {
    setLoading(true)
    console.log('deleting', router.query.id);
    fetch(`/api/assets/${router.query.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.success) {
          router.push('/dashboard/assets')
        } else {
          console.log('Failed to delete asset');
        }
      }).catch((error) => {
        console.error(`Error while trying to delete: ${error.message}`);
      })
  }

  function closeDeleteModal(){
    setShowDeleteModal(false)
  }

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
            style={{ perspective: '1px', borderRadius: '0.75rem' }}
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
              className="hvr-hang bg-indigo-700 text-white active:bg-indigo-900 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">Edit Asset
            </button>
            <button
              className="hvr-hang bg-red-600 text-white active:bg-red-800 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowDeleteModal(true)}>Delete Asset
            </button>
            {showDeleteModal && !loading && <ConfirmationDialog
              message={'Are you sure you want to delete this asset?'}
              actionButtonText={'Delete'}
              actionFunction={deleteAsset} 
              closeFunction={closeDeleteModal}/>
            }
            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}