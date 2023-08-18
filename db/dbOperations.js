import Asset from "./Asset"

export async function readUserAssets(userId){
    const assets = await Asset.find({userId: userId}).lean()
    return JSON.parse(JSON.stringify(assets))
}

export async function insertNewAsset(data){
    const asset = await Asset.insert(JSON.stringify(data)).lean()
    return JSON.parse(JSON.stringify(asset))
}