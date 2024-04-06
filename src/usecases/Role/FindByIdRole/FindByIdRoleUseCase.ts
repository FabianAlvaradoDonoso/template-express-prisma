import { IRoleRepository } from '../../../repositories'
import { IRole } from './FindByIdRoleDTO'

export class FindByIdRoleUseCase {
  constructor(private userRepository: IRoleRepository) {}

  async execute(id: string): Promise<IRole | Error> {
    const user = await this.userRepository.findById(id)
    if (!user) {
      throw new Error('Role does not exists.')
    }
    return user
  }
}
