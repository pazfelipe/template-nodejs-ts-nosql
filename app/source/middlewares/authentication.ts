/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyOptions } from 'jsonwebtoken';

const SALT = process.env.SALT_TOKEN;

class Auth {
  static generateToken(
    data: Record<string, unknown>,
    expiresIn = '7d',
  ): string {
    return jwt.sign(data, SALT, { expiresIn });
  }

  static decodeToken(token: string): Record<string, unknown> | unknown {
    const t = String(token).replace(/Bearer /, '');
    return jwt.verify(t, SALT, (err: any, decoded: any): VerifyOptions => {
      if (err) {
        throw new Error(err);
      }
      return decoded;
    });
  }

  static authorize(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    /**
     * Verifica se existe o token no header da requisição
     */
    if (!req.headers.authorization)
      return res.status(401).send(['Acesso negado']);
    const [bearer, token] = JSON.stringify(req.headers.authorization)
      .replace(/"/g, '')
      .split(' ');
    /**
     * Verifica se o token informado é válido
     * Ex: Bearer ...
     */
    if (!/^Bearer$/i.test(bearer))
      return res.status(400).send(['Padrão de token inválido']);
    /**
     * Valida o token
     */
    return jwt.verify(token, SALT, (err, decoded) => {
      if (err) {
        return res.status(401).send(['Token de autorização inválido']);
      }
      req.body.session = { ...decoded, token };
      return next();
    });
  }
}

export default Auth;
