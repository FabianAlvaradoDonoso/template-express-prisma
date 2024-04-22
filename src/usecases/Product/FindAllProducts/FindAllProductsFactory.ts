import { PrismaProductRepository } from '../../../repositories/implementations/prisma'
import { FindAllProductsController } from './FindAllProductsController'
import { FindAllProductsUseCase } from './FindAllProductsUseCase'

export const findAllProductsFactory = () => {
  const prismaProductRepository = new PrismaProductRepository()
  const findAllProductsUseCase = new FindAllProductsUseCase(
    prismaProductRepository
  )
  const findAllProductsController = new FindAllProductsController(
    findAllProductsUseCase
  )

  return findAllProductsController
}
