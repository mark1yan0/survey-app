import { Router } from 'express';
import survey from '../controllers/survey';
import newSurvey from '../controllers/new-survey';
import getAllSurveys from '../controllers/get-all-surveys';
import surveyResponde from '../controllers/survey-respond';
import { Survey } from '../models';

// /survey/...
export const router = Router();

router.get('/all', getAllSurveys);

router.post('/new', newSurvey);

router.get('/:id', survey);

router.patch('/respond/:id', surveyResponde);

router.delete('/delete/:id', async (req, res) => {
	const { id } = req.params;
	try {
		await Survey.findByIdAndDelete(id);

		res.status(204).json({
			messasge: 'Survey deleted successfully',
			data: { deletedId: id },
		});
	} catch (err: any) {
		console.log(err);
		res.status(500).json({
			message: 'An error occured',
			data: { error: 'Error details' },
		});
	}
});
