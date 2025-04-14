import express from 'express';
import ProcessorController from '../controllers/processor';

const router = express.Router();

router.post('/', ProcessorController.add);
router.put('/:id', ProcessorController.update);
router.delete('/:id', ProcessorController.delete);
router.get('/', ProcessorController.getAll);
router.get('/:id', ProcessorController.get);

export default router;
