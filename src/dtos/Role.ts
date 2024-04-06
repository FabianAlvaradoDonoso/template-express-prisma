import { IBase } from './Base'

export interface IRole extends IBase, IRoleRequest {}

export interface IRoleRequest {
  name: string
  description: string
}
