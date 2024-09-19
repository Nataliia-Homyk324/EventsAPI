import  EventsCollection  from '../db/models/events.js';

export const getAllEvents = async () => {
  const events = await EventsCollection.find();
  return events;
};
