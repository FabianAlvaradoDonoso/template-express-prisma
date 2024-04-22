import { IProductRepository } from '../../../repositories'
import { IResultPaginated } from './FindAllProductsDTO'

export class FindAllProductsUseCase {
  constructor(private userRepository: IProductRepository) {}

  async execute(page: number, perPage: number): Promise<IResultPaginated> {
    const result = await this.userRepository.findAll(page, perPage)
    return result
  }
}
