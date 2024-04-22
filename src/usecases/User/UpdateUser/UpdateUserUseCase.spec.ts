import { UpdateUserUseCase } from './UpdateUserUseCase'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import {
  InMemoryRoleRepository,
  InMemoryUserRepository
} from '../../../repositories/implementations/in-memory'
import { IUser } from '../../../dtos/User'
import { createUserMock, updateUserMock } from '../../../mocks'

describe('Update User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createUserUseCase: CreateUserUseCase
  let updateUserUseCase: UpdateUserUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    inMemoryRoleRepository = new InMemoryRoleRepository()

    createUserUseCase = new CreateUserUseCase(
      inMemoryUserRepository,
      inMemoryRoleRepository
    )
    updateUserUseCase = new UpdateUserUseCase(inMemoryUserRepository)
  })

  it('Should be able to create and update an user ', async () => {
    const response = await createUserUseCase.execute(createUserMock)

    const { id } = response as IUser
    await expect(
      updateUserUseCase.execute(id, updateUserMock)
    ).resolves.not.toThrow()

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'update@mail.com'
        })
      ])
    )
  })

  it('Should not be able to update an user that does not exist', async () => {
    const id = '123'

    await expect(
      updateUserUseCase.execute(id, updateUserMock)
    ).rejects.toThrowError('User does not exists')
  })
})
