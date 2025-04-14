import express from 'express';
import ComponentsController from '../controllers/components';

const router = express.Router();

router.get('/', ComponentsController.getAll);
router.get('/build', ComponentsController.getBuild);

export default router;
