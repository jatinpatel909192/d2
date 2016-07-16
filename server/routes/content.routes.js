import { Router } from 'express';
import * as ContentController from '../controllers/content.controller';
const router = new Router();

// Get all Contents
router.route('/').get(ContentController.getContents);

// Get one Content by id
router.route('/:id').get(ContentController.getContent);

// Add a new Content
router.route('/').post(ContentController.addContent);

// Delete a content by id
router.route('/:id').delete(ContentController.deleteContent);

export default router;
