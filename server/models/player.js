import mongoose from 'mongoose';
//import deepPopulate from 'mongoose-deep-populate';
var deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;


const playerSchema = new Schema({
//  id: { type: 'String', required: true },
  ipAddress: { type: 'String', required: true },
  playlist: {type: Schema.Types.ObjectId, ref: 'Playlist'},                      //references
  cpuId: { type: 'String', required: true },
  location: { type: 'String', required: true },
  name: { type: 'String', required: true },
  screenSize: { type: 'String', required: true },
  screenOrientation: { type: 'String', required: true },
  apiKey: { type: 'String', required: true },
  livePlaylistId: { type: 'String', required: true },
  livePlaylistVersion: { type: 'String', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

playerSchema.plugin(deepPopulate,{
  whitelist: [
    'playlist',
    'playlist.layout',
    'playlist.layout.zones',
    'playlist.playlistContents',
    'playlist.playlistContents.content',
    'playlist.playlistContents.content.contentTitles',
  ]
});

export default mongoose.model('Player', playerSchema);
