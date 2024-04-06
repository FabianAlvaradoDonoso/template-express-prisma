import { PrismaRoleRepository } from '../../../repositories/implementations/prisma'
import { FindByIdRoleController } from './FindByIdRoleController'
import { FindByIdRoleUseCase } from './FindByIdRoleUseCase'

export const findByIdRoleFactory = () => {
  const prismaRoleRepository = new PrismaRoleRepository()
  const findByIdRoleUseCase = new FindByIdRoleUseCase(prismaRoleRepository)
  const findByIdRoleController = new FindByIdRoleController(findByIdRoleUseCase)

  return findByIdRoleController
}
