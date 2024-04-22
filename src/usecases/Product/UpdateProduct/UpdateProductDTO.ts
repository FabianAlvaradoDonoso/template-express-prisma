export interface IProduct extends IUpdateProductRequest {
  id: string
  created_at: Date
  updated_at: Date | null
}

export interface IUpdateProductRequest {
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  status: boolean
}
