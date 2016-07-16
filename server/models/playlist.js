import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
//  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  marquee: { type: 'String', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
  layout: {type: Schema.Types.ObjectId, ref: 'Layout'},                      //references
//  player: [{type: Schema.Types.ObjectId, ref: 'Player'}],                      //references
  playlistContents: [{type: Schema.Types.ObjectId, ref: 'PlaylistContent'}],                      //references
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Playlist', playlistSchema);
