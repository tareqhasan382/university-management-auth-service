import { Request, Response } from 'express'
import usersService from './users.service'

// get all users
export const getAllUser = async (req: Request, res: Response) => {
  const users = await usersService.getAll()
  res.send(users)
}

//
export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      sucess: true,
      message: 'user created successfully.',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}
