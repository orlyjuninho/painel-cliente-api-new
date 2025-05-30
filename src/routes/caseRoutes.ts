import { Router } from 'express';
export const caseRoutes = Router();

caseRoutes.get('/', (req, res) => {
  res.json({ message: 'Rota de casos funcionando!' });
});