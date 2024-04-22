import { FindAllRolesUseCase } from './FindAllRolesUseCase'
import { InMemoryRoleRepository } from '../../../repositories/implementations/in-memory'
import { CreateRoleUseCase } from '../CreateRole/CreateRoleUseCase'
import { createRoleMock } from '../../../mocks'

describe('Find all Roles use case', () => {
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createRoleUseCase: CreateRoleUseCase
  let findAllRolesUseCase: FindAllRolesUseCase

  beforeAll(() => {
    inMemoryRoleRepository = new InMemoryRoleRepository()
    createRoleUseCase = new CreateRoleUseCase(inMemoryRoleRepository)
    findAllRolesUseCase = new FindAllRolesUseCase(inMemoryRoleRepository)
  })

  it('Should be able to find all Roles', async () => {
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

    await expect(findAllRolesUseCase.execute(1, 10)).resolves.not.toThrow()
    expect(inMemoryRoleRepository.roles.length).toEqual(3)
  })
})
