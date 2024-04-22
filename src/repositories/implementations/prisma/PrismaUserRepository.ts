import { IUserRequest, IUser, IResultPaginated } from '../../../dtos'
import { IUserRepository } from '../../IUserRepository'

import { prismaClient } from '../../../libs'
import { resultPaginated } from '../../../helpers'

export class PrismaUserRepository implements IUserRepository {
  private repository = prismaClient.user

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const roles = await this.repository.findMany()
    const result = await resultPaginated(roles, page, perPage)
    return result
  }

  async findById(id: string): Promise<IUser | null> {
    const role = await this.repository.findFirst({
      where: { id }
    })
    return role ?? null
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const role = await this.repository.findFirst({
      include: {
        role: true
      },
      where: { email }
    })
    return role ?? null
  }

  async create(data: IUserRequest): Promise<IUser | Error> {
    const role = await this.repository.create({
      data
    })
    return role
  }

  async update(id: string, data: IUserRequest): Promise<IUser | Error> {
    const role = await this.repository.update({
      data,
      where: { id }
    })
    return role
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      where: { id }
    })
  }
}
