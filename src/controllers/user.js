import { getAllUsers, createUser } from '../services/users.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';


export const getUsersController = async (req, res, next) => {
  try {
       const { page, perPage } = parsePaginationParams(req.query);
    const users = await getAllUsers({
      page,
      perPage,
    });

        res.json({
            status: 200,
            message: 'Successfully found users!',
            data: users,
        });
    } catch(err) {
		next(err);
	}
}

export const createUserController = async (req, res) => {
  const user = await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created an user!`,
    data: user,
  });
};


