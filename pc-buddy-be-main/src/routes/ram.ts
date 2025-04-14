import express from 'express';
import RAMController from '../controllers/ram';

const router = express.Router();

router.post('/', RAMController.add);
router.put('/:id', RAMController.update);
router.delete('/:id', RAMController.delete);
router.get('/', RAMController.getAll);
router.get('/:id', RAMController.get);

export default router;
