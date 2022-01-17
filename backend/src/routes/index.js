/* eslint-disable import/extensions */
import pkg from 'express';
import finder from './finder.js';

const { Router } = pkg;

const router = Router();

router.use('/', finder);

export default router;
