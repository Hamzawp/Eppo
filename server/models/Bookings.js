import mongoose from "mongoose";
const BookingsSchema = new mongoose.Schema({
    reqBy: {
        type: String,
        required: true,
    },
    reqFor: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending"
    },
    timeofApp: {
        type: String,
        required: true,
    },
    dateofApp: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

export default mongoose.model("Bookings", BookingsSchema)