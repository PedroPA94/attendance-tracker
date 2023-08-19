import { PrismaClient } from '@prisma/client'
import Instructor from '../interfaces/Instructor';
const prisma = new PrismaClient()

export default class InstructorService {
  public static createInstructor = async (instructorData: Instructor): Promise<Instructor> => {
    const createdInstructor = await prisma.instructor.create({
      data:
        instructorData
    });
    return createdInstructor;
  }
}