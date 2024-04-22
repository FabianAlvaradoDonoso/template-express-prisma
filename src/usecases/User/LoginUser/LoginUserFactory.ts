import { PrismaUserRepository } from '../../../repositories/implementations/prisma'
import { LoginUserController } from './LoginUserController'
import { LoginUserUseCase } from './LoginUserUseCase'

export const loginUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository()

  const loginUserUseCase = new LoginUserUseCase(prismaUserRepository)
  const loginUserController = new LoginUserController(loginUserUseCase)

  return loginUserController
}
