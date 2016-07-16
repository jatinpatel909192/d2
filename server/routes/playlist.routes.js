import { Router } from 'express';
import * as PlaylistController from '../controllers/playlist.controller';
const router = new Router();

// Get all Playlists
router.route('/').get(PlaylistController.getPlaylists);

// Get one Playlist by id
router.route('/:id').get(PlaylistController.getPlaylist);

// Add a new Playlist
router.route('/').post(PlaylistController.addPlaylist);

// Delete a Playlist by id
router.route('/:id').delete(PlaylistController.deletePlaylist);

export default router;
