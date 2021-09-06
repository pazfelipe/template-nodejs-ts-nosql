import { Router } from 'express';
import ExampleController from '../controllers/exampleController';

const router = Router();

router.post('/', ExampleController.create);

export default router;
