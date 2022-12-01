import mongoose from 'mongoose';
const schema = mongoose.Schema({
    image: String,
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;