import { Router } from 'express';
import invoiceRoutes from './invoice';
// import userRoutes from './user';

const router = Router();

router.use('/invoices', invoiceRoutes);

// Caso haja outras rotas, adicione-as:
// router.use('/users', userRoutes);

export default router;
