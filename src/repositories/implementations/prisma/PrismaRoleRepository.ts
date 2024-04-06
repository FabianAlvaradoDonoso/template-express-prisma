import { IRoleRequest, IRole, IResultPaginated } from '../../../dtos'
import { IRoleRepository } from '../../IRoleRepository'

import { prismaClient } from '../../../libs'
import { resultPaginated } from '../../../helpers'

export class PrismaRoleRepository implements IRoleRepository {
  private repository = prismaClient.role

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const roles = await this.repository.findMany()
    const result = await resultPaginated(roles, page, perPage)
    return result
  }

  async findById(id: string): Promise<IRole | null> {
    const role = await this.repository.findFirst({
      where: { id }
    })
    return role ?? null
  }

  async findByName(name: string): Promise<IRole | null> {
    const role = await this.repository.findFirst({
      where: { name }
    })
    return role ?? null
  }

  async create(data: IRoleRequest): Promise<IRole | Error> {
    const role = await this.repository.create({
      data
    })
    return role
  }

  async update(id: string, data: IRoleRequest): Promise<IRole | Error> {
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
