import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
//  id: { type: 'String', required: true },
  fileContentType: { type: 'String', required: true },
  fileFormat: { type: 'String', required: true },
  fileName: { type: 'String', required: true },
  fileLocation: { type: 'String', required: true },
  fileStoreName: { type: 'String', required: true },
  processed: { type: 'Boolean', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
  contentTitles: [{type: Schema.Types.ObjectId, ref: 'ContentTitle'}],                      //references
//  playlistContent: [{type: Schema.Types.ObjectId, ref: 'PlaylistContent'}],                      //references
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Content', ContentSchema);