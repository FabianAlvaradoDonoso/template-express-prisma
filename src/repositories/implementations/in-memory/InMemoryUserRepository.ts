import { v4 as uuid } from 'uuid'

import { IUser, IUserRequest } from '../../../dtos/User'
import { IUserRepository } from '../../IUserRepository'
import { IResultPaginated } from '../../../dtos/Pagination'
import { resultPaginated } from '../../../helpers/pagination'

export class InMemoryUserRepository implements IUserRepository {
  users: IUser[] = []

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    return await resultPaginated(this.users, page, perPage)
  }

  async findById(id: string): Promise<IUser | null> {
    const user = this.users.filter((obj) => obj.id === id)[0]
    return user ?? null
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = this.users.filter((obj) => obj.email === email)[0]
    return user ?? null
  }

  async create(data: IUserRequest): Promise<Error | IUser> {
    this.users.push({
      ...data,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date()
    })

    return this.users[this.users.length - 1]
  }

  async update(id: string, data: IUserRequest): Promise<Error | IUser> {
    this.users
      .filter((obj) => obj.id === id)
      .map((item) => {
        item.email = data.email
        item.name = data.name
        item.phone = data.phone
        item.password = data.password
        item.role_id = data.role_id
        item.status = data.status
        item.city = data.city
        item.address = data.address
      })

    return this.users.filter((obj) => obj.id === id)[0]
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((obj) => obj.id !== id)
  }
}
