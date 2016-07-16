import Player from '../models/player';
import sanitizeHtml from 'sanitize-html';
/**
 * Get all players
 * @param req
 * @param res
 * @returns void
 */
export function getPlayers(req, res) {
  Player.find().sort('-dateAdded').exec((err, players) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ players });
  });
}

/**
 * Save a player
 * @param req
 * @param res
 * @returns void
 */

export function addPlayer(req, res) {
  const newPlayer = new Player(req.body.player);

  // Let's sanitize inputs
  newPlayer.ipAddress = sanitizeHtml(newPlayer.ipAddress);
  newPlayer.cpuId = sanitizeHtml(newPlayer.cpuId);
  newPlayer.playlistId = sanitizeHtml(newPlayer.playlistId);                //references
  newPlayer.location = sanitizeHtml(newPlayer.location);
  newPlayer.name = sanitizeHtml(newPlayer.name);
  newPlayer.screenSize = sanitizeHtml(newPlayer.screenSize);
  newPlayer.screenOrientation = sanitizeHtml(newPlayer.screenOrientation);
  newPlayer.apiKey = sanitizeHtml(newPlayer.apiKey);
  newPlayer.livePlaylistId = sanitizeHtml(newPlayer.livePlaylistId);
  newPlayer.livePlaylistVersion = sanitizeHtml(newPlayer.livePlaylistVersion);

  newPlayer.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ player: saved });
  });
}

/**
 * Get a single player
 * @param req
 * @param res
 * @returns void
 */
export function getPlayer(req, res) {
  Player.findOne({ _id: req.params.id })
    .deepPopulate('playlist playlist.layout playlist.layout.zones playlist.playlistContents playlist.playlistContents.content playlist.playlistContents.content.contentTitles')
    .exec((err, player) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ player });
    });
}

/**
 * Delete a player
 * @param req
 * @param res
 * @returns void
 */
export function deletePlayer(req, res) {
  Player.findOne({ _id: req.params.id }).exec((err, player) => {
    if (err) {
      res.status(500).send(err);
    }

    player.remove(() => {
      res.status(200).end();
    });
  });
}
