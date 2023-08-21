import dbConnect from "./dbConnect"
import Asset from "./Asset"
import User from "./User"


export async function readUserAssets(userId) {
    let assets = []
    if (userId) {
        await dbConnect()
        const dbResponse = await Asset.find({ userId: userId })
        assets = JSON.parse(JSON.stringify(dbResponse))
    }
    return assets
}

export async function insertNewAsset(data) {
    const asset = await Asset.insert(JSON.stringify(data))
    return JSON.parse(JSON.stringify(asset))
}

export async function findAssetById(assetId) {
    const asset = await Asset.findById(assetId)
    return JSON.parse(JSON.stringify(asset))
}

export async function updateAsset(assetId, data) {
    const asset = await Asset.findByIdAndUpdate(
        assetId,
        JSON.stringify(data), {
        new: true,
        runValidators: true,
    })
    return JSON.parse(JSON.stringify(asset))
}

export async function deleteAsset(assetId) {
    const asset = await Asset.deleteOne({ _id: assetId })
    return JSON.parse(JSON.stringify(asset))
}

export async function insertNewUser(data) {
    const user = await User.insert(JSON.stringify(data))
    return JSON.parse(JSON.stringify(user))
}

export async function getUserId(userEmail) {
    await dbConnect()
    const user = await User.findOne({ email: userEmail })
    return JSON.parse(JSON.stringify(user))._id
}