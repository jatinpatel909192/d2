import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const playerLogSchema = new Schema({
//  id: { type: 'String', required: true },
  onTime: { type: 'String', required: true },
  offTime: { type: 'String', required: true },
  networkConnect: { type: 'String', required: true },
  networkDisconnect: { type: 'String', required: true },
  event: { type: 'String', required: true },
  tvOn: { type: 'String', required: true },
  tvOff: { type: 'String', required: true },
  contentUpdateDateTime: { type: 'Date', required: true },
  version: { type: 'Number', required: true },
  deleted: { type: 'Boolean', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('PlayerLog', playerLogSchema);
