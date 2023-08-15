const ASSETS_ENDPOINT = '/api/assets'

export async function getAllAssetsForUser(userId) {
    const res = await fetch(ASSETS_ENDPOINT)
    return await res.json()
}

export async function getAllMovies() {
    const res = await fetch("/api/movies")
    return await res.json()
}

export async function createAsset(data) {
    // Default options are marked with *
    const response = await fetch(ASSETS_ENDPOINT, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
}