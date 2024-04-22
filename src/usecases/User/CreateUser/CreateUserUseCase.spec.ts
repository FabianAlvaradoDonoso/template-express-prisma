import { CreateUserUseCase } from './CreateUserUseCase'
import {
  InMemoryRoleRepository,
  InMemoryUserRepository
} from '../../../repositories/implementations/in-memory'
import { createUserMock } from '../../../mocks/'

describe('Create User use case', () => {
  let inMemoryUserRepository: InMemoryUserRepository
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createUserUseCase: CreateUserUseCase

  beforeAll(() => {
    inMemoryUserRepository = new InMemoryUserRepository()
    inMemoryRoleRepository = new InMemoryRoleRepository()
    createUserUseCase = new CreateUserUseCase(
      inMemoryUserRepository,
      inMemoryRoleRepository
    )
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

  it('Should not be able to create a new User with an invalid email', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        email: 'invalid-email'
      })
    ).rejects.toThrowError('Invalid email')
  })

  it('Should not be able to create a new User with an invalid name', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        name: 'a'
      })
    ).rejects.toThrowError('Invalid name')
  })

  it('Should not be able to create a new User with an invalid password', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        password: '123'
      })
    ).rejects.toThrowError('Password must be at least 6 characters')
  })

  it('Should not be able to create a new User with an invalid phone', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        phone: '1234567890'
      })
    ).rejects.toThrowError('Invalid phone')
  })

  it('Should not be able to create a new User with an invalid city', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        city: 'a'
      })
    ).rejects.toThrowError('Invalid city')
  })

  it('Should not be able to create a new User with an invalid address', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        address: 'a'
      })
    ).rejects.toThrowError('Invalid address')
  })

  it('Should not be able to create a new User with an invalid role_id', async () => {
    inMemoryUserRepository.users = inMemoryUserRepository.users.filter(
      (user) => user.email !== createUserMock.email
    )

    await expect(
      createUserUseCase.execute({
        ...createUserMock,
        role_id: '123'
      })
    ).rejects.toThrowError('Role not found')
  })
})
