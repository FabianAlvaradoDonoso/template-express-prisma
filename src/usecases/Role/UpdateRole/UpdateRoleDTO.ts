export interface IRole extends IUpdateRoleRequest {
  id: string
  created_at: Date
  updated_at: Date | null
}

export interface IUpdateRoleRequest {
  name: string
  description: string
}
