import { UsersCollection } from '../db/models/users.js';

export const getAllUsers = async () => {
  const users = await UsersCollection.find();
  return users;
};

export const createUser = async (payload) => {
   const user = await UsersCollection.create(payload);
  return user;
};
