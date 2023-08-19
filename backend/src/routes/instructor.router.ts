import * as express from 'express';
import { InstructorController } from '../controllers';

const router = express.Router();

router.post('/new', InstructorController.createInstructor );

export default router;
