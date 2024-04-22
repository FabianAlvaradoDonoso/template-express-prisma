import { IProduct } from '../../../dtos/Product'
import { createProductMock } from '../../../mocks'
import { InMemoryProductRepository } from '../../../repositories/implementations/in-memory'
import { CreateProductUseCase } from '../CreateProduct/CreateProductUseCase'
import { FindByNameProductUseCase } from './FindByNameProductUseCase'

describe('Find an Product use case', () => {
  let inMemoryProductRepository: InMemoryProductRepository
  let findByNameProductUseCase: FindByNameProductUseCase
  let createProductUseCase: CreateProductUseCase

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    findByNameProductUseCase = new FindByNameProductUseCase(
      inMemoryProductRepository
    )
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
  })

  it('Should be able to find name Product', async () => {
    const result = await createProductUseCase.execute(createProductMock)
    const name = (result as IProduct).name

    await expect(findByNameProductUseCase.execute(name)).resolves.not.toThrow()
  })

  it('Should not be able to find name Product that does not exist', async () => {
    const name = '123'

    await expect(findByNameProductUseCase.execute(name)).rejects.toThrow(
      'Product does not exists.'
    )
  })
})
