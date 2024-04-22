import { v4 as uuid } from 'uuid'

import { IProduct, IProductRequest } from '../../../dtos/Product'
import { IProductRepository } from '../../IProductRepository'
import { IResultPaginated } from '../../../dtos/Pagination'
import { resultPaginated } from '../../../helpers/pagination'

export class InMemoryProductRepository implements IProductRepository {
  products: IProduct[] = []

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    return await resultPaginated(this.products, page, perPage)
  }

  async findById(id: string): Promise<IProduct | null> {
    const user = this.products.filter((obj) => obj.id === id)[0]
    return user ?? null
  }

  async findByName(name: string): Promise<IProduct | null> {
    const user = this.products.filter((obj) => obj.name === name)[0]
    return user ?? null
  }

  async create(data: IProductRequest): Promise<Error | IProduct> {
    this.products.push({
      ...data,
      id: uuid(),
      created_at: new Date(),
      updated_at: new Date()
    })

    return this.products[this.products.length - 1]
  }

  async update(id: string, data: IProductRequest): Promise<Error | IProduct> {
    this.products
      .filter((obj) => obj.id === id)
      .map((item) => {
        item.name = data.name
        item.status = data.status
        item.price = data.price
        item.stock = data.stock
        item.image_url = data.image_url
        item.updated_at = new Date()
      })

    return this.products.filter((obj) => obj.id === id)[0]
  }

  async delete(id: string): Promise<void> {
    this.products = this.products.filter((obj) => obj.id !== id)
  }
}
