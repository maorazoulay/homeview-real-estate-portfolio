import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import dbConnect from '@/db/dbConnect'
import { insertNewAsset, readUserAssets } from '@/db/dbOperations'
import { UNAUTHORIZED } from '@/server/serverUtils'

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    if(!session) {
      return res.status(UNAUTHORIZED.status)
      .json({success: false, error: UNAUTHORIZED.error})
    }

    const {query: { userId }, method} = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const assets = await readUserAssets(userId)
                res.status(200).json({ success: true, data: assets })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const asset = await insertNewAsset(req.body)
                console.log("Asset: ", asset);
                res.status(201).json({ success: true, data: asset })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}