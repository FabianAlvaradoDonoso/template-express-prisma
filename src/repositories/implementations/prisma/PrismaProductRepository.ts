import { IProductRequest, IProduct, IResultPaginated } from '../../../dtos'
import { IProductRepository } from '../../IProductRepository'

import { prismaClient } from '../../../libs'
import { resultPaginated } from '../../../helpers'

export class PrismaProductRepository implements IProductRepository {
  private repository = prismaClient.product

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const roles = await this.repository.findMany()
    const result = await resultPaginated(roles, page, perPage)
    return result
  }

  async findById(id: string): Promise<IProduct | null> {
    const role = await this.repository.findFirst({
      where: { id }
    })
    return role ?? null
  }

  async create(data: IProductRequest): Promise<IProduct | Error> {
    const role = await this.repository.create({
      data
    })
    return role
  }

  async update(id: string, data: IProductRequest): Promise<IProduct | Error> {
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
