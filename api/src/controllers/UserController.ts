import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ 
      email
    })

    if (userAlreadyExists) {
      return res.status(400).json({ error: "User Already Exists"})
    }

    const user = usersRepository.create({
      name, 
      email
    })

    await usersRepository.save(user);

    return res.status(201).json(user);
  }

  // async getAll(_req: Request, res: Response) {

  //   const usersRepository = getCustomRepository(UsersRepository);

  //   const users = await usersRepository.find();

  //   return res.status(201).json(users);
  // }
}

export { UserController };