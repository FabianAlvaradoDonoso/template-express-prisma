export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  status: boolean
  created_at: Date
  updated_at: Date | null
}
