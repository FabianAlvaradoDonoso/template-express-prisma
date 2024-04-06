import { IRoleRepository } from '../../../repositories'
import { ICreateRole, ICreateRoleRequest } from './CreateRoleDTO'

export class CreateRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  async execute(data: ICreateRoleRequest): Promise<ICreateRole | Error> {
    if (data.name) {
      const roleExists = await this.roleRepository.findByName(data.name)
      if (roleExists) {
        throw new Error('Role already exists.')
      }
    }

    const result = await this.roleRepository.create(data)
    return result
  }
}
