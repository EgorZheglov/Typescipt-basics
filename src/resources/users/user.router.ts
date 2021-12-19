import { Router } from 'express';
import { UserUpdateData } from '../../types';
import User from './user.model';
import usersService from './user.service';

const router: Router = Router();

router.get('/', async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.post('/', async (req, res) => {
  const { name, login, password } = req.body;
  const user = await usersService.createUser({ name, login, password });

  res.json(user);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getUser(id);

  if (user) {
    res.json(User.toResponse(user));
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const response = await usersService.deleteUser(id);

  res.send(response);
});

router.put('/:id', async (req, res) => {
  const data: UserUpdateData = {};
  const id = req.params.id;

  const user = await usersService.updateUser(req.body, id);

  if (user) {
    return res.json(User.toResponse(user));
  }
});

export default router;
