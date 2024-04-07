import { IRoleRepository } from '../../../repositories'
import { IRole, IUpdateRoleRequest } from './UpdateRoleDTO'

export class UpdateRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  async execute(id: string, data: IUpdateRoleRequest): Promise<IRole | Error> {
    const roleExists = await this.roleRepository.findById(id)

    if (!roleExists) {
      throw new Error('Role does not exists.')
    }
    const result = await this.roleRepository.update(id, data)

    return result
  }
}
