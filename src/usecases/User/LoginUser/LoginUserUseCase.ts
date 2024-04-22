import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../../core/config'
import { IUserRepository } from '../../../repositories'
import { IUserLoginToken } from './LoginUserDTO'

export class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    email: string,
    password: string
  ): Promise<IUserLoginToken | Error> {
    if (!email || email === '') {
      throw new Error('Email is required.')
    }

    if (!password || password === '') {
      throw new Error('Password is required.')
    }

    const userExists = await this.userRepository.findByEmail(email)
    if (!userExists) {
      throw new Error('User not exists.')
    }

    const verifyPassword = await bcrypt.compare(password, userExists.password)
    if (!verifyPassword) {
      throw new Error('Password does not match.')
    }

    // userExist without password
    const { password: _, ...userExistsWithoutPassword } = userExists

    const token = Jwt.sign(
      { ...userExistsWithoutPassword },
      JWT_SECRET as string,
      { expiresIn: '30m' }
    )

    return { token }
  }
}
