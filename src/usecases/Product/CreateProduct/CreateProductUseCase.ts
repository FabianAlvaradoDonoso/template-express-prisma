import { IProductRepository } from '../../../repositories'
import { ICreateProduct, ICreateProductRequest } from './CreateProductDTO'

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: ICreateProductRequest): Promise<ICreateProduct | Error> {
    if (data.name) {
      const productExists = await this.productRepository.findByName(data.name)
      if (productExists) {
        throw new Error('Product already exists.')
      }
    }

    // Validate if name is valid
    if (data.name.length < 3 || data.name.length > 255) {
      throw new Error('Invalid name.')
    }

    // Validate if description is valid
    if (data.description.length < 10 || data.description.length > 255) {
      throw new Error('Invalid description.')
    }

    // Validate if price is valid
    if (data.price < 0) {
      throw new Error('Invalid price.')
    }

    // Validate if stock is valid
    if (data.stock < 0) {
      throw new Error('Invalid stock.')
    }

    // Validate if image_url is valid
    if (
      !data.image_url.match(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
      )
    ) {
      throw new Error('Invalid image_url.')
    }

    const result = await this.productRepository.create(data)

    return result
  }
}
