import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { getUsersController, createUserController} from '../controllers/user.js';
import {createUserValidationSchema} from '../validation/users.js'
const router = Router();
router.get('/users', ctrlWrapper(getUsersController));
router.post('/users', validateBody(createUserValidationSchema), ctrlWrapper(createUserController));


export default router;
