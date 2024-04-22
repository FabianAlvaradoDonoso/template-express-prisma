import { CreateRoleUseCase } from './CreateRoleUseCase'
import { InMemoryRoleRepository } from '../../../repositories/implementations/in-memory'
import { createRoleMock } from '../../../mocks/'

describe('Create Role use case', () => {
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createRoleUseCase: CreateRoleUseCase

  beforeAll(() => {
    inMemoryRoleRepository = new InMemoryRoleRepository()
    createRoleUseCase = new CreateRoleUseCase(inMemoryRoleRepository)
  })

  it('Should be able to create a new Role ', async () => {
    await expect(
      createRoleUseCase.execute(createRoleMock)
    ).resolves.not.toThrow()

    expect(inMemoryRoleRepository.roles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'client'
        })
      ])
    )
  })

  it('Should not be able to create a new Role with the same name', async () => {
    await expect(createRoleUseCase.execute(createRoleMock)).rejects.toThrow(
      'Role already exists.'
    )
  })
})
