import { PrismaProductRepository } from '../../../repositories/implementations/prisma'
import { CreateProductController } from './CreateProductController'
import { CreateProductUseCase } from './CreateProductUseCase'

export const createProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository()

  const createProductUseCase = new CreateProductUseCase(prismaProductRepository)
  const createProductController = new CreateProductController(
    createProductUseCase
  )

  return createProductController
}
