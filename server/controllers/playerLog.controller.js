import PlayerLog from '../models/playerLog';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all playerLogs
 * @param req
 * @param res
 * @returns void
 */
export function getPlayerLogs(req, res) {
  PlayerLog.find().sort('-dateAdded').exec((err, playerLogs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playerLogs });
  });
}

/**
 * Save a playerLog
 * @param req
 * @param res
 * @returns void
 */

export function addPlayerLog(req, res) {
  const newPlayerLog = new PlayerLog(req.body.playerLog);

  // Let's sanitize inputs
  newPlayerLog.onTime = sanitizeHtml(newPlayerLog.onTime);
  newPlayerLog.offTime = sanitizeHtml(newPlayerLog.offTime);
  newPlayerLog.networkConnect = sanitizeHtml(newPlayerLog.networkConnect);                // references
  newPlayerLog.networkDisconnect = sanitizeHtml(newPlayerLog.networkDisconnect);
  newPlayerLog.event = sanitizeHtml(newPlayerLog.event);
  newPlayerLog.tvOn = sanitizeHtml(newPlayerLog.tvOn);
  newPlayerLog.tvOff = sanitizeHtml(newPlayerLog.tvOff);
  newPlayerLog.contentUpdateDateTime = sanitizeHtml(newPlayerLog.contentUpdateDateTime);

  newPlayerLog.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playerLog: saved });
  });
}

/**
 * Get a single playerLog
 * @param req
 * @param res
 * @returns void
 */
export function getPlayerLog(req, res) {
  PlayerLog.findOne({ _id: req.params.id }).exec((err, playerLog) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playerLog });
  });
}

/**
 * Delete a playerLog
 * @param req
 * @param res
 * @returns void
 */
export function deletePlayerLog(req, res) {
  PlayerLog.findOne({ _id: req.params.id }).exec((err, playerLog) => {
    if (err) {
      res.status(500).send(err);
    }

    playerLog.remove(() => {
      res.status(200).end();
    });
  });
}
