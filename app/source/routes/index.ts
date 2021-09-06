import { Router } from 'express';
const router = Router();

import example from './exampleRoute';

router.get('/api/version', (_, res) =>
  res.json({ version: process.env.npm_package_version }),
);

router.use('/api/example', example);

export default router;
