export interface IUser extends IUpdateUserRequest {
  id: string
  created_at: Date
  updated_at: Date | null
}

export interface IUpdateUserRequest {
  email: string
  name: string
  phone: string
  password: string
  role_id: string
  status: boolean
  city: string
  address: string
}
