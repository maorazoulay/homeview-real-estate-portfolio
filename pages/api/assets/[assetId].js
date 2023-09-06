import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import dbConnect from '@/db/dbConnect'
import { deleteAsset, findAssetById, updateAsset } from '@/db/dbOperations'
import { UNAUTHORIZED } from "@/utils/serverUtils"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(UNAUTHORIZED.status)
      .json({ success: false, error: UNAUTHORIZED.error })
  }

  const { query: { assetId }, method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const asset = await findAssetById(assetId)
        if (!asset) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: asset })
      } catch (error) {
        res.status(400).json({ success: false })
        console.error('error:', error)

      }
      break

    case 'PUT':
      try {
        const asset = await updateAsset(assetId, req.body)
        if (!asset) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: asset })
      } catch (error) {
        res.status(400).json({ success: false })
        console.error('error:', error)

      }
      break

    case 'DELETE':
      try {
        const deletedAsset = await deleteAsset(assetId)
        if (!deletedAsset) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: { deletedAsset } })
      } catch (error) {
        res.status(400).json({ success: false })
        console.error('error:', error)

      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}