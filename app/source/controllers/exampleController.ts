import { NextFunction, Request, Response } from 'express';
import { exampleCreate } from '../services/example';

class ExampleController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(201).send(await exampleCreate(req.body));
    } catch (error) {
      next(error);
    }
  }
}

export default ExampleController;
