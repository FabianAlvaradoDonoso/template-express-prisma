import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { CreateRoleUseCase } from '../CreateRole/CreateRoleUseCase'
import { InMemoryRoleRepository } from '../../../repositories/implementations/in-memory'
import { IRole } from '../../../dtos/Role'
import { createRoleMock, updateRoleMock } from '../../../mocks'

describe('Update Role use case', () => {
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createRoleUseCase: CreateRoleUseCase
  let updateRoleUseCase: UpdateRoleUseCase

  beforeAll(() => {
    inMemoryRoleRepository = new InMemoryRoleRepository()
    createRoleUseCase = new CreateRoleUseCase(inMemoryRoleRepository)
    updateRoleUseCase = new UpdateRoleUseCase(inMemoryRoleRepository)
  })

  it('Should be able to create and update an role ', async () => {
    const response = await createRoleUseCase.execute(createRoleMock)

    const { id } = response as IRole
    await expect(
      updateRoleUseCase.execute(id, updateRoleMock)
    ).resolves.not.toThrow()

    expect(inMemoryRoleRepository.roles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'root'
        })
      ])
    )
  })
})
