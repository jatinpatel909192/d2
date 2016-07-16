import PlaylistContent from '../models/playlistContent';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all playlistContents
 * @param req
 * @param res
 * @returns void
 */
export function getPlaylistContents(req, res) {
  PlaylistContent.find().sort('-dateAdded').exec((err, playlistContents) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playlistContents });
  });
}

/**
 * Save a playlistContent
 * @param req
 * @param res
 * @returns void
 */

export function addPlaylistContent(req, res) {
  const newPlaylistContent = new PlaylistContent(req.body.playlistContent);

  // Let's sanitize inputs
  newPlaylistContent.contentId = sanitizeHtml(newPlaylistContent.contentId);                //references
  newPlaylistContent.playlistId = sanitizeHtml(newPlaylistContent.playlistId);                //references
  newPlaylistContent.zoneId = sanitizeHtml(newPlaylistContent.zoneId);                //references
  newPlaylistContent.order = sanitizeHtml(newPlaylistContent.order);

  newPlaylistContent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playlistContent: saved });
  });
}

/**
 * Get a single playlistContent
 * @param req
 * @param res
 * @returns void
 */
export function getPlaylistContent(req, res) {
  PlaylistContent.findOne({ _id: req.params.id }).populate('content').exec((err, playlistContent) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playlistContent });
  });
}

/**
 * Delete a playlistContent
 * @param req
 * @param res
 * @returns void
 */
export function deletePlaylistContent(req, res) {
  PlaylistContent.findOne({ _id: req.params.id }).exec((err, playlistContent) => {
    if (err) {
      res.status(500).send(err);
    }

    playlistContent.remove(() => {
      res.status(200).end();
    });
  });
}
