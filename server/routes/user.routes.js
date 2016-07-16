import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Users
router.route('/').get(UserController.getUsers);

// Get one user by id
router.route('/:id').get(UserController.getUser);

// Add a new user
router.route('/').post(UserController.addUser);

// Delete a user by id
router.route('/:id').delete(UserController.deleteUser);

export default router;
