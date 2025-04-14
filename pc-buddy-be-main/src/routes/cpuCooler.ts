import express from 'express';
import CpuCoolerController from '../controllers/cpuCooler';

const router = express.Router();

router.post('/', CpuCoolerController.add);
router.put('/:id', CpuCoolerController.update);
router.delete('/:id', CpuCoolerController.delete);
router.get('/', CpuCoolerController.getAll);
router.get('/:id', CpuCoolerController.get);

export default router;
