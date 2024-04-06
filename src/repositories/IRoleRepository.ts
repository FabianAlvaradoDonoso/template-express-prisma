import { IResultPaginated, IRole, IRoleRequest } from '../dtos'

export interface IRoleRepository {
  findAll(page: number, perPage: number): Promise<IResultPaginated>
  create(data: IRoleRequest): Promise<IRole | Error>
  update(id: string, data: IRoleRequest): Promise<IRole | Error>
  delete(id: string): Promise<void>
  findById(id: string): Promise<IRole | null>
  findByName(name: string): Promise<IRole | null>
}
