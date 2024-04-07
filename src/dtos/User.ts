import { IBase } from './Base'

export interface IUser extends IBase, IUserRequest {}

export interface IUserRequest {
  email: string
  name: string
  phone: string
  password: string
  role_id: string
  status: boolean
  city: string
  address: string
}
