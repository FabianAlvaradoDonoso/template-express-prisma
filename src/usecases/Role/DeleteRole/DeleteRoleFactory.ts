import { PrismaRoleRepository } from '../../../repositories/implementations/prisma'
import { DeleteRoleController } from './DeleteRoleController'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

export const deleteRoleFactory = () => {
  const prismaRoleRepository = new PrismaRoleRepository()
  const deleteRoleUseCase = new DeleteRoleUseCase(prismaRoleRepository)
  const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)

  return deleteRoleController
}
