import { IProductRepository } from '../../../repositories'
import { IProduct } from './FindByNameProductDTO'

export class FindByNameProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(name: string): Promise<IProduct | Error> {
    const product = await this.productRepository.findByName(name)
    if (!product) {
      throw new Error('Product does not exists.')
    }
    return product
  }
}
