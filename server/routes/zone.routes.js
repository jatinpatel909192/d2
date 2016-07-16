import { Router } from 'express';
import * as ZoneController from '../controllers/zone.controller';
const router = new Router();

// Get all zones
router.route('/').get(ZoneController.getZones);

// Get one zone by id
router.route('/:id').get(ZoneController.getZone);

// Add a new zone
router.route('/').post(ZoneController.addZone);

// Delete a zone by id
router.route('/:id').delete(ZoneController.deleteZone);

export default router;
