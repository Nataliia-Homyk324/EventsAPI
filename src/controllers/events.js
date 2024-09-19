import { getAllEvents } from '../services/events.js';

export const getEventsController = async (req, res, next) => {
    try {
        const events = await getAllEvents();

        res.json({
            status: 200,
            message: 'Successfully found events!',
            data: events,
        });
    } catch(err) {
		next(err);
	}
}
