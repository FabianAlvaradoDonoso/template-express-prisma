import { IBase } from './Base'

export interface IProduct extends IBase, IProductRequest {}

export interface IProductRequest {
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  status: boolean
}
