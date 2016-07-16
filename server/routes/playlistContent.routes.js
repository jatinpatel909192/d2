import { Router } from 'express';
import * as PlaylistContentController from '../controllers/playlistContent.controller';
const router = new Router();

// Get all Playlists
router.route('/').get(PlaylistContentController.getPlaylistContents);

// Get one PlaylistContent by id
router.route('/:id').get(PlaylistContentController.getPlaylistContent);

// Add a new PlaylistContent
router.route('/').post(PlaylistContentController.addPlaylistContent);

// Delete a Playlist by id
router.route('/:id').delete(PlaylistContentController.deletePlaylistContent);

export default router;
