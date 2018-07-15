import { QuestionService } from './question.service';
import { AuthService } from './auth.service';
import { AnswerService } from './answer.service';

export const services: any[] = [AuthService, QuestionService];

export * from './auth.service';
export * from './question.service';
export * from './answer.service';
