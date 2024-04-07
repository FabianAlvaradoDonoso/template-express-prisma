import { IResultPaginated, IUser, IUserRequest } from '../dtos'

export interface IUserRepository {
  findAll(page: number, perPage: number): Promise<IResultPaginated>
  create(data: IUserRequest): Promise<IUser | Error>
  update(id: string, data: IUserRequest): Promise<IUser | Error>
  delete(id: string): Promise<void>
  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
}
