import express from 'express';
import GPUController from '../controllers/gpu';

const router = express.Router();

router.post('/', GPUController.add);
router.put('/:id', GPUController.update);
router.delete('/:id', GPUController.delete);
router.get('/', GPUController.getAll);
router.get('/:id', GPUController.get);

export default router;
