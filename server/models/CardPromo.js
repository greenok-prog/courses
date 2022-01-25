import mongoose from "mongoose";
const { Schema } = mongoose

const cardPromoSchema = mongoose.Schema({
    price: { type: String },
    image: { type: String, },
    title: { type: String, },
    subtitle: { type: String, },
    willLearn: { type: [String], },
    description: { type: String, },
    card: { type: Schema.Types.ObjectId, ref: "Card" }
})
const CardPromo = mongoose.model("CardPromo", cardPromoSchema)
export default CardPromo