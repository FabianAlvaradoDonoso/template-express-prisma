import { PrismaProductRepository } from '../../../repositories/implementations/prisma'
import { FindByNameProductController } from './FindByNameProductController'
import { FindByNameProductUseCase } from './FindByNameProductUseCase'

export const findByNameProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository()
  const findByNameProductUseCase = new FindByNameProductUseCase(
    prismaProductRepository
  )
  const findByNameProductController = new FindByNameProductController(
    findByNameProductUseCase
  )

  return findByNameProductController
}
