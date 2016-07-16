import { Router } from 'express';
import * as LayoutController from '../controllers/layout.controller';
const router = new Router();

// Get all layouts
router.route('/').get(LayoutController.getLayouts);

// Get one Layout by id
router.route('/:id').get(LayoutController.getLayout);

// Add a new Layout
router.route('/').post(LayoutController.addLayout);

// Delete a Layout by id
router.route('/:id').delete(LayoutController.deleteLayout);

export default router;
