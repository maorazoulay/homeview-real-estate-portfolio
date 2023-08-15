import { Schema, model, models} from "mongoose"

const assetSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        immutable: true
    },
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    propetyType: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    marketValue: {
        type: Number,
        required: true
    }
})

const Asset = models.Asset || model("Asset", assetSchema)
export default Asset


