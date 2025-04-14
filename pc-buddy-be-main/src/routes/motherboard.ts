import express from 'express';
import MotherboardController from '../controllers/motherboard';

const router = express.Router();

router.post('/', MotherboardController.add);
router.put('/:id', MotherboardController.update);
router.delete('/:id', MotherboardController.delete);
router.get('/', MotherboardController.getAll);
router.get('/:id', MotherboardController.get);

export default router;
