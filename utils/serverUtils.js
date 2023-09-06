export const UNAUTHORIZED = {
    status: 401,
    error: 'Unauthorized, Please authenticate'
}

const imageTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
];

function validateImageType(file) {
    return imageTypes.includes(file.type);
}