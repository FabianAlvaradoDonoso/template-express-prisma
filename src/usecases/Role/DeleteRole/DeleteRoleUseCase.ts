import { IRoleRepository } from '../../../repositories'

export class DeleteRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  async execute(id: string): Promise<void | Error> {
    const roleExists = await this.roleRepository.findById(id)

    if (!roleExists) {
      throw new Error('Role does not exists.')
    }

    const result = await this.roleRepository.delete(id)
    return result
  }
}
