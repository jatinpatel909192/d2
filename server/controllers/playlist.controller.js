import Playlist from '../models/playlist';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all playlists
 * @param req
 * @param res
 * @returns void
 */
export function getPlaylists(req, res) {
  Playlist.find().sort('-dateAdded').exec((err, playlists) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playlists });
  });
}

/**
 * Save a playlist
 * @param req
 * @param res
 * @returns void
 */

export function addPlaylist(req, res) {
  const newPlaylist = new Playlist(req.body.playlist);

  // Let's sanitize inputs
  newPlaylist.layoutId = sanitizeHtml(newPlaylist.layoutId);                //references
  newPlaylist.name = sanitizeHtml(newPlaylist.name);
  newPlaylist.marquee = sanitizeHtml(newPlaylist.marquee);

  newPlaylist.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playlist: saved });
  });
}

/**
 * Get a single playlist
 * @param req
 * @param res
 * @returns void
 */
export function getPlaylist(req, res) {
  Playlist.findOne({ _id: req.params.id }).populate('layout').populate('playlistContent').exec((err, playlist) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ playlist });
  });
}

/**
 * Delete a playlist
 * @param req
 * @param res
 * @returns void
 */
export function deletePlaylist(req, res) {
  Playlist.findOne({ _id: req.params.id }).exec((err, playlist) => {
    if (err) {
      res.status(500).send(err);
    }

    playlist.remove(() => {
      res.status(200).end();
    });
  });
}
