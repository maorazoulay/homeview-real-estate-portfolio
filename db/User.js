import { Schema, model, models} from "mongoose"

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        immutable: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    signUpDate: {
        type: Date,
        required: true
    }
})

export default models.User || model("User", userSchema)
