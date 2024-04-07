import { IUserRepository } from '../../../repositories'
import { IUser } from './FindByIdUserDTO'

export class FindByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string): Promise<IUser | Error> {
    const user = await this.userRepository.findById(email)
    if (!user) {
      throw new Error('User does not exists.')
    }
    return user
  }
}
