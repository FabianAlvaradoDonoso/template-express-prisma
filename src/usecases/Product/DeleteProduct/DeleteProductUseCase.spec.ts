import { IProduct } from '../../../dtos'
import { createProductMock } from '../../../mocks'
import { InMemoryProductRepository } from '../../../repositories/implementations/in-memory'
import { CreateProductUseCase } from '../CreateProduct/CreateProductUseCase'
import { DeleteProductUseCase } from './DeleteProductUseCase'

describe('Delete Product use case', () => {
  let inMemoryProductRepository: InMemoryProductRepository

  let createProductUseCase: CreateProductUseCase
  let deleteProductUseCase: DeleteProductUseCase

  beforeEach(() => {
    inMemoryProductRepository = new InMemoryProductRepository()

    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
    deleteProductUseCase = new DeleteProductUseCase(inMemoryProductRepository)
  })

  it('Should be able delete a Product', async () => {
    const result = await createProductUseCase.execute(createProductMock)

    expect(inMemoryProductRepository.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Create'
        })
      ])
    )

    const id = (result as IProduct).id

    await expect(deleteProductUseCase.execute(id)).resolves.not.toThrow()

    expect(inMemoryProductRepository.products).toEqual(
      expect.not.arrayContaining([
        expect.objectContaining({
          email: 'Create'
        })
      ])
    )
  })

  it('Should not be able delete a Product that does not exist', async () => {
    const id = '123'

    await expect(deleteProductUseCase.execute(id)).rejects.toThrow(
      'Product does not exists.'
    )
  })
})
