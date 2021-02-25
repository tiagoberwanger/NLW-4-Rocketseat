import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

// router.get('/users', userController.getAll);

router.get('/surveys', surveyController.show);

router.post('/users', userController.create);

router.post('/surveys', surveyController.create);

export { router };