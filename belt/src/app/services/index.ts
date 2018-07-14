import { QuestionService } from './question.service';
import { AuthService } from './auth.service';

export const services: any[] = [AuthService, QuestionService];

export * from './auth.service';
export * from './question.service';
