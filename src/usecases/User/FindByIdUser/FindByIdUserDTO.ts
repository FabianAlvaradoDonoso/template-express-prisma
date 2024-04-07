export interface IUser {
  id: string
  email: string
  name: string
  phone: string
  password: string
  role_id: string
  status: boolean
  city: string
  address: string
  created_at: Date
  updated_at: Date | null
}
