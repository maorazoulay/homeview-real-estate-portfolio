import dbConnect from '@/db/dbConnect'
import Asset from '@/db/Asset'

export default async function handler(req, res) {
  const {query: { assetId }, method} = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const asset = await Asset.findById(assetId)
        if (!asset) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: asset })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT':
      try {
        const asset = await Asset.findByIdAndUpdate(assetId, req.body, {
          new: true,
          runValidators: true,
        })
        if (!asset) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: asset })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE':
      try {
        const deletedAsset = await Asset.deleteOne({ _id: assetId })
        if (!deletedAsset) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {deletedAsset} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}