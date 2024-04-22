import bcrypt from 'bcryptjs'
import { IRoleRepository, IUserRepository } from '../../../repositories'
import { ICreateUser, ICreateUserRequest } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private roleRepository: IRoleRepository
  ) {}

  async execute(data: ICreateUserRequest): Promise<ICreateUser | Error> {
    if (data.email) {
      const userExists = await this.userRepository.findByEmail(data.email)
      if (userExists) {
        throw new Error('User already exists.')
      }
    }

    // Validate if email is valid
    if (
      !data.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      throw new Error('Invalid email.')
    }

    // Validate if name is valid
    if (data.name.length < 3 || data.name.length > 255) {
      throw new Error('Invalid name.')
    }

    // Validate if password is strong
    if (data.password.length < 8 || data.password.length > 255) {
      throw new Error('Password must be at least 6 characters.')
    }

    // Validate if phone is valid
    if (data.phone.length !== 9) {
      throw new Error('Invalid phone.')
    }

    // Validate if city is valid
    if (data.city.length < 3 || data.city.length > 255) {
      throw new Error('Invalid city.')
    }

    // Validate if address is valid
    if (data.address.length < 3 || data.address.length > 255) {
      throw new Error('Invalid address.')
    }

    // Validate if role_id is valid
    const role = await this.roleRepository.findById(data.role_id)
    if (!role) {
      throw new Error('Role not found.')
    }

    // hash password
    const hashPassword = await bcrypt.hash(data.password, 10)

    const result = await this.userRepository.create({
      ...data,
      password: hashPassword
    })

    return result
  }
}
