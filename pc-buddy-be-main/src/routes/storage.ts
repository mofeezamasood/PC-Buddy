import express from 'express';
import StorageController from '../controllers/storage';

const router = express.Router();

router.post('/', StorageController.add);
router.put('/:id', StorageController.update);
router.delete('/:id', StorageController.delete);
router.get('/', StorageController.getAll);
router.get('/:id', StorageController.get);

export default router;
