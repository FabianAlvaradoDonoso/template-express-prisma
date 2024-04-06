import { FindByIdRoleUseCase } from './FindByIdRoleUseCase'
import { InMemoryRoleRepository } from '../../../repositories/implementations/in-memory'
import { CreateRoleUseCase } from '../CreateRole/CreateRoleUseCase'
import { IRole } from '../../../dtos/Role'
import { createRoleMock } from '../../../mocks'

describe('Find an Role use case', () => {
  let inMemoryRoleRepository: InMemoryRoleRepository
  let findByIdRoleUseCase: FindByIdRoleUseCase
  let createRoleUseCase: CreateRoleUseCase

  beforeAll(() => {
    inMemoryRoleRepository = new InMemoryRoleRepository()
    findByIdRoleUseCase = new FindByIdRoleUseCase(inMemoryRoleRepository)
    createRoleUseCase = new CreateRoleUseCase(inMemoryRoleRepository)
  })

  it('Should be able to find Id Role', async () => {
    const result = await createRoleUseCase.execute(createRoleMock)
    const id = (result as IRole).id

    await expect(findByIdRoleUseCase.execute(id)).resolves.not.toThrow()
  })
})
