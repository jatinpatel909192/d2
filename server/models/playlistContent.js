import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const playlistContentSchema = new Schema({
//  id: { type: 'String', required: true },
  order: { type: 'String', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
  content: [{type: Schema.Types.ObjectId, ref: 'Content'}],                      //references
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('PlaylistContent', playlistContentSchema);