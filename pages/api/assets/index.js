import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { insertNewAsset, readUserAssets } from '@/db/dbOperations'
import { UNAUTHORIZED, parseFormData } from '@/server/serverUtils'

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        return res.status(UNAUTHORIZED.status)
            .json({ success: false, error: UNAUTHORIZED.error })
    }

    const method = req.method
    const userId = session.user.id || ""

    switch (method) {
        case 'GET':
            try {
                const assets = await readUserAssets(userId)
                res.status(200).json({ success: true, data: assets })
            } catch (error) {
                res.status(400).json({ success: false })
                console.error('error:', error)
            }
            break
        case 'POST':
            try {
                let data = JSON.parse(req.body)
                data.userId = userId
                const asset = await insertNewAsset(data)
                res.status(201).json({ success: true, data: asset })
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