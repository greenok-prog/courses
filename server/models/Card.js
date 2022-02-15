import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    title: { type: String, require: true },
    text: { type: String, require: true },
    image: { type: String, require: true },
    type: { type: String, default: 'design', require: true },
    popular: { type: Number, default: 0 },



})
const Card = mongoose.model("Card", cardSchema)
export default Card