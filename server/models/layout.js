import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const layoutSchema = new Schema({
//  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },

//  playlist: [{type: Schema.Types.ObjectId, ref: 'Playlist'}],                      //references
  zones: [{type: Schema.Types.ObjectId, ref: 'Zone'}],                      //references
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Layout', layoutSchema);
