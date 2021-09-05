import { Router } from 'express';
const router = Router();

router.get('/api/version', (_, res) => res.json({ version: process.env.npm_package_version }));

export default router;
