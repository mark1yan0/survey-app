import { Router } from 'express';
import survey from '../controllers/survey';
import newSurvey from '../controllers/new-survey';
import getAllSurveys from '../controllers/get-all-surveys';

// /survey/...
export const router = Router();

router.get('/all', getAllSurveys);

router.post('/new', newSurvey);

router.get('/:id', survey);
