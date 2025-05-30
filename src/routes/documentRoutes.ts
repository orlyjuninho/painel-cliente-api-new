import { Router } from 'express';
export const documentRoutes = Router();

documentRoutes.get('/', (req, res) => {
  res.json({ message: 'Rota de documentos funcionando!' });
});