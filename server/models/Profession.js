import mongoose from "mongoose";
const ProfessionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    photos: {
        type: String,
    },
    desc: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    Price: {
        type: Number,
        required: true,
    },
    professional: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Profession", ProfessionSchema)