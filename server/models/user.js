import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  avatar: { type: 'String', required: true },
  avatarLocation: { type: 'String', required: true },
  avatarName: { type: 'String', required: true },
  avatarFormat: { type: 'String', required: true },
  role: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);
