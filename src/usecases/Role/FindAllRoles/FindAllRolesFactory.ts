import { PrismaRoleRepository } from '../../../repositories/implementations/prisma'
import { FindAllRolesController } from './FindAllRolesController'
import { FindAllRolesUseCase } from './FindAllRolesUseCase'

export const findAllRolesFactory = () => {
  const prismaRoleRepository = new PrismaRoleRepository()
  const findAllRolesUseCase = new FindAllRolesUseCase(prismaRoleRepository)
  const findAllRolesController = new FindAllRolesController(findAllRolesUseCase)

  return findAllRolesController
}
