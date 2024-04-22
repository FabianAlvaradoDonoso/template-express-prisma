import { FindAllProductsUseCase } from './FindAllProductsUseCase'
import {
  InMemoryRoleRepository,
  InMemoryProductRepository
} from '../../../repositories/implementations/in-memory'
import { CreateProductUseCase } from '../CreateProduct/CreateProductUseCase'
import { createProductMock } from '../../../mocks'

describe('Find all Products use case', () => {
  let inMemoryProductRepository: InMemoryProductRepository
  let inMemoryRoleRepository: InMemoryRoleRepository
  let createProductUseCase: CreateProductUseCase
  let findAllProductsUseCase: FindAllProductsUseCase

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    inMemoryRoleRepository = new InMemoryRoleRepository()

    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
    findAllProductsUseCase = new FindAllProductsUseCase(
      inMemoryProductRepository
    )
  })

  it('Should be able to find all Products', async () => {
    await expect(
      createProductUseCase.execute(createProductMock)
    ).resolves.not.toThrow()

    expect(inMemoryProductRepository.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Create'
        })
      ])
    )

    await expect(findAllProductsUseCase.execute(1, 10)).resolves.not.toThrow()
    expect(inMemoryProductRepository.products.length).toEqual(1)
  })
})
