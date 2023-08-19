import { RequestHandler } from 'express';
import { InstructorService } from '../services';
import Instructor from '../interfaces/Instructor';

export default class InstructorController {
  public static createInstructor: RequestHandler = async (req, res) => {
    const newInstructor: Instructor = req.body;
    const createdInstructor = await InstructorService.createInstructor(newInstructor);
    res.status(201).json(createdInstructor);
  }
}