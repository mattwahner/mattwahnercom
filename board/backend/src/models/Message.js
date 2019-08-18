import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    text: String
});

export default mongoose.model('Message', schema);