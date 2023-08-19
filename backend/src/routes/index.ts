import * as express from 'express';
import instructorRouter from './instructor.router'

const router = express.Router();

router.use('/instructor', instructorRouter);

export default router;
