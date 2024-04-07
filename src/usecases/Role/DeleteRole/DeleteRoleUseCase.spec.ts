import { InMemoryRoleRepository } from '../../../repositories/implementations/in-memory'
import { CreateRoleUseCase } from '../CreateRole/CreateRoleUseCase'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'
import { IRole } from '../../../dtos'
import { createRoleMock } from '../../../mocks'

describe('Delete Role use case', () => {
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createRoleUseCase: CreateRoleUseCase
  let deleteRoleUseCase: DeleteRoleUseCase

  beforeEach(() => {
    inMemoryRoleRepository = new InMemoryRoleRepository()
    createRoleUseCase = new CreateRoleUseCase(inMemoryRoleRepository)
    deleteRoleUseCase = new DeleteRoleUseCase(inMemoryRoleRepository)
  })

  it('Should be able delete a Role', async () => {
    const result = await createRoleUseCase.execute(createRoleMock)

    expect(inMemoryRoleRepository.roles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'admin'
        })
      ])
    )

    const id = (result as IRole).id

    await expect(deleteRoleUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryRoleRepository.roles).toEqual(
      expect.not.arrayContaining([
        expect.objectContaining({
          name: 'admin'
        })
      ])
    )
  })

  it('Should not be able delete a Role that does not exist', async () => {
    const id = '123'

    await expect(deleteRoleUseCase.execute(id)).rejects.toThrow(
      'Role does not exists.'
    )
  })
})
