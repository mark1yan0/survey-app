import { Router } from 'express';
import survey from '../controllers/survey';
import newSurvey from '../controllers/new-survey';

// /survey/...
export const router = Router();

router.post('/new', newSurvey);

router.get('/:id', survey);
