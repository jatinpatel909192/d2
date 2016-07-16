import { Router } from 'express';
import * as ContentTitleController from '../controllers/contentTitle.controller';
const router = new Router();

// Get all ContentTitles
router.route('/').get(ContentTitleController.getContentTitles);

// Get one ContentTitle by id
router.route('/:id').get(ContentTitleController.getContentTitle);

// Add a new ContentTitle
router.route('/').post(ContentTitleController.addContentTitle);

// Delete a contentTitle by id
router.route('/:id').delete(ContentTitleController.deleteContentTitle);

export default router;
