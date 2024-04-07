import { FindByEmailUserUseCase } from './FindByEmailUserUseCase'
import { InMemoryUserRepository } from '../../../repositories/implementations/in-memory'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { IUser } from '../../../dtos/User'
import { createUserMock } from '../../../mocks'

describe('Find an User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let findByEmailUserUseCase: FindByEmailUserUseCase
  let createUserUseCase: CreateUserUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    findByEmailUserUseCase = new FindByEmailUserUseCase(inMemoryUserRepository)
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })

  it('Should be able to find email User', async () => {
    const result = await createUserUseCase.execute(createUserMock)
    const email = (result as IUser).email

    await expect(findByEmailUserUseCase.execute(email)).resolves.not.toThrow()
  })

  it('Should not be able to find email User that does not exist', async () => {
    const email = '123@mail.com'

    await expect(findByEmailUserUseCase.execute(email)).rejects.toThrow(
      'User does not exists.'
    )
  })
})
