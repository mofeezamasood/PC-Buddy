import express from 'express';
import PSUController from '../controllers/psu';

const router = express.Router();

router.post('/', PSUController.add);
router.put('/:id', PSUController.update);
router.delete('/:id', PSUController.delete);
router.get('/', PSUController.getAll);
router.get('/:id', PSUController.get);

export default router;
