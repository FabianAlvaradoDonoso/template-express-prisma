import { PrismaProductRepository } from '../../../repositories/implementations/prisma'
import { FindByIdProductController } from './FindByIdProductController'
import { FindByIdProductUseCase } from './FindByIdProductUseCase'

export const findByIdProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository()
  const findByIdProductUseCase = new FindByIdProductUseCase(
    prismaProductRepository
  )
  const findByIdProductController = new FindByIdProductController(
    findByIdProductUseCase
  )

  return findByIdProductController
}
