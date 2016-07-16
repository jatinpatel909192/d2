import { Router } from 'express';
import * as PlayerController from '../controllers/player.controller';
const router = new Router();

// Get all Players
router.route('/').get(PlayerController.getPlayers);

// Get one Player by id
router.route('/:id').get(PlayerController.getPlayer);

// Add a new Player
router.route('/').post(PlayerController.addPlayer);

// Delete a Player by id
router.route('/:id').delete(PlayerController.deletePlayer);

export default router;
