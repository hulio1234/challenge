/* eslint-disable import/extensions */
import pkg from 'express';
import Controller from '../controller/finder.js';

const { Router } = pkg;

const router = Router();

router.post('/finder', Controller.findNumbers);

export default router;
