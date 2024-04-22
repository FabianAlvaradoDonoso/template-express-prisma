import { IResultPaginated, IProduct, IProductRequest } from '../dtos'

export interface IProductRepository {
  findAll(page: number, perPage: number): Promise<IResultPaginated>
  create(data: IProductRequest): Promise<IProduct | Error>
  update(id: string, data: IProductRequest): Promise<IProduct | Error>
  delete(id: string): Promise<void>
  findById(id: string): Promise<IProduct | null>
}
