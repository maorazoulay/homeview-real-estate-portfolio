export async function getAllAssetsForUser(userId){
    const res = await fetch("/mocked_assets.json")
    return await res.json()
}

export async function getAllMovies(){
    const res = await fetch("/api/movies")
    return await res.json()
}