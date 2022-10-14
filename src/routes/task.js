import { Router } from 'express';
import { authUser } from '../controllers/task';

const router = Router();

router.get('/users/:user/:pass/auth', authUser)

export default router