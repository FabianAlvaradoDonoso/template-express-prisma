import { FindAllUsersUseCase } from './FindAllUsersUseCase'
import {
  InMemoryRoleRepository,
  InMemoryUserRepository
} from '../../../repositories/implementations/in-memory'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { createUserMock } from '../../../mocks'

describe('Find all Users use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createUserUseCase: CreateUserUseCase
  let findAllUsersUseCase: FindAllUsersUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    inMemoryRoleRepository = new InMemoryRoleRepository()

    createUserUseCase = new CreateUserUseCase(
      inMemoryUserRepository,
      inMemoryRoleRepository
    )
    findAllUsersUseCase = new FindAllUsersUseCase(inMemoryUserRepository)
  })

  it('Should be able to find all Users', async () => {
    await expect(
      createUserUseCase.execute(createUserMock)
    ).resolves.not.toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'create@mail.com'
        })
      ])
    )

    await expect(findAllUsersUseCase.execute(1, 10)).resolves.not.toThrow()
    expect(inMemoryUserRepository.users.length).toEqual(1)
  })
})
