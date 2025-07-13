import express from 'express';
import { getAllProsucts } from './service.js';

const router = express.Router();

router.get('/', getAllProsucts);


export default router;