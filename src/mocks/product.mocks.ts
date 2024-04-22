import { IProductRequest } from '../dtos'
import { faker } from '@faker-js/faker'

export const createProductMock: IProductRequest = {
  name: 'Create',
  description: faker.commerce.productDescription(),
  price: faker.number.int({ min: 1, max: 99999 }),
  stock: faker.number.int({ min: 1, max: 100 }),
  image_url: faker.image.url(),
  status: faker.datatype.boolean()
}

export const updateProductMock: IProductRequest = {
  name: 'Update',
  description: faker.commerce.productDescription(),
  price: faker.number.int({ min: 1, max: 99999 }),
  stock: faker.number.int({ min: 1, max: 100 }),
  image_url: faker.image.url(),
  status: faker.datatype.boolean()
}
