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
    await dbConnect()
    const asset = await Asset.create({
        userId: data.userId,
        title: data.title,
        address: data.address,
        propertyType: data.propertyType,
        purchasePrice: data.purchasePrice,
        purchaseDate: data.purchaseDate,
        marketValue: data.marketValue,
        images: data.images
    })
    return JSON.parse(JSON.stringify(await asset.save()))
}

export async function findAssetById(assetId) {
    await dbConnect()
    const asset = await Asset.findById(assetId)
    return JSON.parse(JSON.stringify(asset))
}

export async function updateAsset(assetId, data) {
    await dbConnect()
    const asset = await Asset.findByIdAndUpdate(assetId, data, { new: true })
    return JSON.parse(JSON.stringify(asset))
}

export async function deleteAsset(assetId) {
    await dbConnect()
    const asset = await Asset.deleteOne({ _id: assetId })
    return JSON.parse(JSON.stringify(asset))
}

export async function insertNewUser(data) {
    await dbConnect()
    const user = await User.create({
        email: data.email,
        name: data.name,
        image: data.image,
        signUpDate: Date.now()
    })
    return JSON.parse(JSON.stringify(await user.save()))
}

export async function getUserId(userEmail) {
    await dbConnect()
    const user = await User.findOne({ email: userEmail })
    return JSON.parse(JSON.stringify(user))?._id || ""
}