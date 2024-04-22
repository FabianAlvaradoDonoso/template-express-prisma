import { IProductRepository } from '../../../repositories'
import { IProduct } from './FindByIdProductDTO'

export class FindByIdProductUseCase {
  constructor(private userRepository: IProductRepository) {}

  async execute(email: string): Promise<IProduct | Error> {
    const user = await this.userRepository.findById(email)
    if (!user) {
      throw new Error('Product does not exists.')
    }
    return user
  }
}
