import {
  InMemoryRoleRepository,
  InMemoryUserRepository
} from '../../../repositories/implementations/in-memory'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { DeleteUserUseCase } from './DeleteUserUseCase'
import { IUser } from '../../../dtos'
import { createUserMock } from '../../../mocks'

describe('Delete User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let inMemoryRoleRepository: InMemoryRoleRepository

  let createUserUseCase: CreateUserUseCase
  let deleteUserUseCase: DeleteUserUseCase

  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    inMemoryRoleRepository = new InMemoryRoleRepository()

    createUserUseCase = new CreateUserUseCase(
      inMemoryUserRepository,
      inMemoryRoleRepository
    )
    deleteUserUseCase = new DeleteUserUseCase(inMemoryUserRepository)
  })

  it('Should be able delete a User', async () => {
    const result = await createUserUseCase.execute(createUserMock)

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'create@mail.com'
        })
      ])
    )

    const id = (result as IUser).id

    await expect(deleteUserUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.not.arrayContaining([
        expect.objectContaining({
          email: 'create@mail.com'
        })
      ])
    )
  })

  it('Should not be able delete a User that does not exist', async () => {
    const id = '123'

    await expect(deleteUserUseCase.execute(id)).rejects.toThrow(
      'User does not exists.'
    )
  })
})
