import { Router } from 'express';
import * as PlayerLogController from '../controllers/playerLog.controller';
const router = new Router();

// Get all PlayerLogs
router.route('/').get(PlayerLogController.getPlayerLogs);

// Get one PlayerLog by id
router.route('/:id').get(PlayerLogController.getPlayerLog);

// Add a new PlayerLog
router.route('/').post(PlayerLogController.addPlayerLog);

// Delete a PlayerLog by id
router.route('/:id').delete(PlayerLogController.deletePlayerLog);

export default router;
