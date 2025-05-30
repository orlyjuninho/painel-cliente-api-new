import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // Aqui você pode colocar a lógica de autenticação real
  // Por enquanto, só passa para frente
  next();
}