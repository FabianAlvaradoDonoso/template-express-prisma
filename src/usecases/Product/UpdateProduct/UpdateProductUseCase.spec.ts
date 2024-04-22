import { IProduct } from '../../../dtos/Product'
import { createProductMock, updateProductMock } from '../../../mocks'
import { InMemoryProductRepository } from '../../../repositories/implementations/in-memory'
import { CreateProductUseCase } from '../CreateProduct/CreateProductUseCase'
import { UpdateProductUseCase } from './UpdateProductUseCase'

describe('Update Product use case', () => {
  let inMemoryProductRepository: InMemoryProductRepository
  let createProductUseCase: CreateProductUseCase
  let updateProductUseCase: UpdateProductUseCase

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository()

    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
    updateProductUseCase = new UpdateProductUseCase(inMemoryProductRepository)
  })

  it('Should be able to create and update an product ', async () => {
    const response = await createProductUseCase.execute(createProductMock)

    const { id } = response as IProduct
    await expect(
      updateProductUseCase.execute(id, updateProductMock)
    ).resolves.not.toThrow()

    expect(inMemoryProductRepository.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Update'
        })
      ])
    )
  })

  it('Should not be able to update an product that does not exist', async () => {
    const id = '123'

    await expect(
      updateProductUseCase.execute(id, updateProductMock)
    ).rejects.toThrow('Product does not exists')
  })
})
