import { createUserMock } from '../../../mocks'
import {
  InMemoryRoleRepository,
  InMemoryUserRepository
} from '../../../repositories/implementations/in-memory'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { LoginUserUseCase } from './LoginUserUseCase'

describe('Login User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createUserUseCase: CreateUserUseCase
  let loginUserUseCase: LoginUserUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    inMemoryRoleRepository = new InMemoryRoleRepository()
    createUserUseCase = new CreateUserUseCase(
      inMemoryUserRepository,
      inMemoryRoleRepository
    )

    loginUserUseCase = new LoginUserUseCase(inMemoryUserRepository)
  })

  it('Should be able to login a User', async () => {
    await createUserUseCase.execute(createUserMock)

    expect(inMemoryUserRepository.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'create@mail.com'
        })
      ])
    )

    await expect(
      loginUserUseCase.execute(createUserMock.email, createUserMock.password)
    ).resolves.not.toThrow()
  })

  it('Should not be able to login a User with wrong email', async () => {
    await expect(
      loginUserUseCase.execute('', createUserMock.password)
    ).rejects.toThrow('Email is required.')
  })

  it('Should not be able to login a User with wrong password', async () => {
    await expect(
      loginUserUseCase.execute(createUserMock.email, '')
    ).rejects.toThrow('Password is required.')
  })

  it('Should not be able to login with user not register', async () => {
    await expect(
      loginUserUseCase.execute('a', createUserMock.password)
    ).rejects.toThrow('User not exists.')
  })

  it('Should not be able to login with wrong password', async () => {
    await expect(
      loginUserUseCase.execute(createUserMock.email, 'wrongPassword')
    ).rejects.toThrow('Password does not match.')
  })
})
