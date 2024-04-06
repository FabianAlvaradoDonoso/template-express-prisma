import { IRoleRepository } from '../../../repositories'
import { IResultPaginated } from './FindAllRolesDTO'

export class FindAllRolesUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  async execute(page: number, perPage: number): Promise<IResultPaginated> {
    const result = await this.roleRepository.findAll(page, perPage)
    return result
  }
}
