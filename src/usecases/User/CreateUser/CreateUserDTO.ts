export interface ICreateUserRequest {
  email: string
  name: string
  phone: string
  password: string
  role_id: string
  status: boolean
  city: string
  address: string
}

export interface ICreateUser extends ICreateUserRequest {
  id: string
  created_at: Date
  updated_at: Date | null
}
