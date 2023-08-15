import dbConnect from "@/db/dbConnect"
import Asset from "@/db/Asset"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const assets = await Asset.find({})
                res.status(200).json({ success: true, data: assets })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const asset = await Asset.create(req.body)
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