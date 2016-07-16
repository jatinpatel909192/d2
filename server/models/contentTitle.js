import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contentTitleSchema = new Schema({
  language: { type: 'String', required: true },
  text: { type: 'String', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('ContentTitle', contentTitleSchema);
