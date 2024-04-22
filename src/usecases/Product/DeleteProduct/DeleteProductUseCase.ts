import { IProductRepository } from '../../../repositories'

export class DeleteProductUseCase {
  constructor(private userRepository: IProductRepository) {}

  async execute(id: string): Promise<void | Error> {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) {
      throw new Error('Product does not exists.')
    }

    const result = await this.userRepository.delete(id)
    return result
  }
}
