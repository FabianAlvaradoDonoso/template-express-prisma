import { CreateUserUseCase } from './CreateUserUseCase'
import { InMemoryUserRepository } from '../../../repositories/implementations/in-memory'
import { createUserMock } from '../../../mocks/'

describe('Create User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let createUserUseCase: CreateUserUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })

  it('Should be able to create a new User ', async () => {
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
  })

  it('Should not be able to create a new User with an email that already exists', async () => {
    await expect(
      createUserUseCase.execute(createUserMock)
    ).rejects.toThrowError('User already exists')
  })
})
