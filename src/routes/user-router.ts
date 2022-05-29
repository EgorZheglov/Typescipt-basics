import { Router } from 'express';
import {
  getAll,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/user-controller';
import restrictResponse from '../libs/restrict-response';
import { userCreateMW, userUpdateMW } from '../middlwares/user-middlewares';

const router: Router = Router();

router.get('/', async (req, res) => {
  const users = await getAll();
  // map user fields to exclude secret field like "password"
  res.status(200).send(users);
});

router.post('/', userCreateMW, async (req, res) => {
  //soon will be using only for admins
  const { name, login, password } = req.body;
  const user = await createUser({ name, login, password });

  res.status(201).send(restrictResponse(user));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await getUserById(id);

  if (user) {
    res.status(200).json(restrictResponse(user));
  } else {
    res.status(404).json('Not found');
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await deleteUser(id);
  // await taskService.removedUserUpdate(id);

  res.status(204).send('User deleted');
});

router.put('/:id', userUpdateMW, async (req, res) => {
  const id = req.params.id;

  const user = await updateUser(req.body, id);

  if (user) {
    return res.send(user);
  } else {
    res.status(404).send('Not found');
  }
});

export default router;
