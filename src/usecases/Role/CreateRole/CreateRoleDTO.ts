export interface ICreateRoleRequest {
  name: string
  description: string
}

export interface ICreateRole extends ICreateRoleRequest {
  id: string
  created_at: Date
  updated_at: Date | null
}
