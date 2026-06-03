import express from 'express';
import { getFallas, createFalla, updateFalla, deleteFalla } from '../controllers/fallaController.js';

const router = express.Router();

router.get('/', getFallas);
router.post('/', createFalla);
router.put('/:id', updateFalla);
router.delete('/:id', deleteFalla);

export default router;