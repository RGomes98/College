import { z } from 'zod';

export const studentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const disciplineSchema = z.object({
  code: z.string(),
  name: z.string(),
  workload: z.number(),
});

export const gradeSchema = z.object({
  grade_1: z.number(),
  grade_2: z.number(),
  student_id: z.string(),
  discipline_id: z.string(),
});
