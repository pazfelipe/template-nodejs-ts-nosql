import { Request, Response, Router } from 'express';
import ExampleController from '../controllers/exampleController';
import Auth from '../middlewares/authentication';

const router = Router();

router
  .post('/', Auth.authorize, ExampleController.create)
  .post('/login', (req: Request, res: Response): Response => {
    const { username } = req.body;

    const serial = {
      username,
      salt: process.env.SALT,
    };

    const token = Auth.generateToken(serial);
    return res.status(200).send(`Bearer ${token}`);
  });

export default router;
