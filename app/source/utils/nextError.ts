/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { NextErrorInterface } from './general';

const NextError = (
  error: NextErrorInterface,
  _: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { messages, status } = error;
  res.status(status).send({ messages });
};

export default NextError;
