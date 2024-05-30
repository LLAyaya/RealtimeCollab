const mongoose= require("mongoose")

const RoomSchema = new mongoose.Schema({
    roomId: { 
        type: Number, 
        unique: true, 
        required: true },
    roomMembers: [Number],
    content: {
        type: String,
        required: true },
});

module.exports = mongoose.model('rooms', RoomSchema);