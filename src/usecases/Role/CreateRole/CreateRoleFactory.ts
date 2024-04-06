import { PrismaRoleRepository } from '../../../repositories/implementations/prisma'
import { CreateRoleController } from './CreateRoleController'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export const createRoleFactory = () => {
  const prismaRoleRepository = new PrismaRoleRepository()
  const createRoleUseCase = new CreateRoleUseCase(prismaRoleRepository)
  const createRoleController = new CreateRoleController(createRoleUseCase)

  return createRoleController
}
