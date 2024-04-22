import { PrismaProductRepository } from '../../../repositories/implementations/prisma'
import { UpdateProductController } from './UpdateProductController'
import { UpdateProductUseCase } from './UpdateProductUseCase'

export const updateProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository()
  const updateProductUseCase = new UpdateProductUseCase(prismaProductRepository)
  const updateProductController = new UpdateProductController(
    updateProductUseCase
  )

  return updateProductController
}
