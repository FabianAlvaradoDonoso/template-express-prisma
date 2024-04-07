import { FindByIdUserUseCase } from './FindByIdUserUseCase'
import { InMemoryUserRepository } from '../../../repositories/implementations/in-memory'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { IUser } from '../../../dtos/User'
import { createUserMock } from '../../../mocks'

describe('Find an User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let findByIdUserUseCase: FindByIdUserUseCase
  let createUserUseCase: CreateUserUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    findByIdUserUseCase = new FindByIdUserUseCase(inMemoryUserRepository)
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  })

  it('Should be able to find id User', async () => {
    const result = await createUserUseCase.execute(createUserMock)
    const id = (result as IUser).id

    await expect(findByIdUserUseCase.execute(id)).resolves.not.toThrow()
  })

  it('Should not be able to find id User that does not exist', async () => {
    const id = '123'

    await expect(findByIdUserUseCase.execute(id)).rejects.toThrow(
      'User does not exists.'
    )
  })
})
