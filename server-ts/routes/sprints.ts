import { Router } from 'express';
import { createSprint, deleteSprint } from '../controllers/sprints';

const router = Router({ mergeParams: true });

router.route('/').post(createSprint);
router.route('/:id').delete(deleteSprint);

export { router as sprintRouter };
