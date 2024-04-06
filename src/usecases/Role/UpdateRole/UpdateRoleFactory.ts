import { PrismaRoleRepository } from '../../../repositories/implementations/prisma'
import { UpdateRoleController } from './UpdateRoleController'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'

export const updateRoleFactory = () => {
  const prismaRoleRepository = new PrismaRoleRepository()
  const updateRoleUseCase = new UpdateRoleUseCase(prismaRoleRepository)
  const updateRoleController = new UpdateRoleController(updateRoleUseCase)

  return updateRoleController
}
