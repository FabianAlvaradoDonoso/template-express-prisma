import { v4 as uuid } from 'uuid'

import { IRole, IRoleRequest } from '../../../dtos/Role'
import { IRoleRepository } from '../../IRoleRepository'
import { IResultPaginated } from '../../../dtos/Pagination'
import { resultPaginated } from '../../../helpers/pagination'

export class InMemoryRoleRepository implements IRoleRepository {
  roles: IRole[] = [
    {
      id: '0bd843c0-ca9f-4d75-884c-3e2be75f5f70',
      name: 'admin',
      description: 'Admin role',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: '73eee8f1-8570-4493-bcb2-9eb961faf3da',
      name: 'user',
      description: 'User role',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    return await resultPaginated(this.roles, page, perPage)
  }

  async findById(id: string): Promise<IRole | null> {
    const user = this.roles.filter((obj) => obj.id === id)[0]
    return user ?? null
  }

  async findByName(name: string): Promise<IRole | null> {
    const user = this.roles.filter((obj) => obj.name === name)[0]
    return user ?? null
  }

  async create(data: IRoleRequest): Promise<Error | IRole> {
    this.roles.push({
      ...data,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date()
    })

    return this.roles[this.roles.length - 1]
  }

  async update(id: string, data: IRoleRequest): Promise<Error | IRole> {
    this.roles
      .filter((obj) => obj.id === id)
      .map((item) => {
        item.name = data.name
        item.description = data.description
      })

    return this.roles.filter((obj) => obj.id === id)[0]
  }

  async delete(id: string): Promise<void> {
    this.roles = this.roles.filter((obj) => obj.id !== id)
  }
}
