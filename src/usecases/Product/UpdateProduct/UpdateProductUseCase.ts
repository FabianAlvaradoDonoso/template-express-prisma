import { IProductRepository } from '../../../repositories'
import { IProduct, IUpdateProductRequest } from './UpdateProductDTO'

export class UpdateProductUseCase {
  constructor(private userRepository: IProductRepository) {}

  async execute(
    id: string,
    data: IUpdateProductRequest
  ): Promise<IProduct | Error> {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) {
      throw new Error('Product does not exists.')
    }
    const result = await this.userRepository.update(id, data)

    return result
  }
}
