import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
  belongTo: { type: 'String', required: true },
  name: { type: 'String', required: true },
  zoneType: { type: 'String', required: true },
  height: { type: 'Number', required: true },
  width: { type: 'Number', required: true },
  top: { type: 'Number', required: true },
  left: { type: 'Number', required: true },
  text: { type: 'String', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
//  playlistContent: [{type: Schema.Types.ObjectId, ref: 'PlaylistContent'}],                      //references
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Zone', zoneSchema);
