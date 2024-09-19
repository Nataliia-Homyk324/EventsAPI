import { UsersCollection } from '../db/models/users.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';


export const getAllUsers = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const usersQuery = UsersCollection.find();
  const usersCount = await UsersCollection.find()
    .merge(usersQuery)
    .countDocuments();

  const users = await usersQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(usersCount, perPage, page);

  return {
    data: users,
    ...paginationData,
  };
};
  

export const createUser = async (payload) => {
   const user = await UsersCollection.create(payload);
  return user;
};
