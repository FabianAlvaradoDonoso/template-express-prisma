export interface ICreateProductRequest {
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  status: boolean
}

export interface ICreateProduct extends ICreateProductRequest {
  id: string
  created_at: Date
  updated_at: Date | null
}
