const { Router } = require('express');

const {
  getTickets,
  createTicket,
  deleteTicket,
} = require('../controllers/tickets');

const router = Router({ mergeParams: true });

router.route('/').get(getTickets).post(createTicket);
router.route('/:id').delete(deleteTicket);

module.exports = router;
