import { Router } from 'express';
import { authUser } from '../controllers/task';

const router = Router();

router.get('/users/:user/:pass', authUser)

export default router