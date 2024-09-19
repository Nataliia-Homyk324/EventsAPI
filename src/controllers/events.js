import { getAllEvents } from '../services/events.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getEventsController = async (req, res, next) => {
    try {
         const { page, perPage } = parsePaginationParams(req.query);
        const events = await getAllEvents({
    page,
    perPage,
  });

        res.json({
            status: 200,
            message: 'Successfully found events!',
            data: events,
        });
    } catch(err) {
		next(err);
	}
}
