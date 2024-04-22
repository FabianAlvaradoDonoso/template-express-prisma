import {
  PrismaRoleRepository,
  PrismaUserRepository
} from '../../../repositories/implementations/prisma'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

export const createUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository()
  const prismaRoleRepository = new PrismaRoleRepository()

  const createUserUseCase = new CreateUserUseCase(
    prismaUserRepository,
    prismaRoleRepository
  )
  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}
