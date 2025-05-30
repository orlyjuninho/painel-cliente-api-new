import { Router } from 'express';
export const clientRoutes = Router();

// Exemplo de rota
clientRoutes.get('/', (req, res) => {
  res.json({ message: 'Rota de clientes funcionando!' });
});