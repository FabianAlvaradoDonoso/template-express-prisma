import { createProductMock } from '../../../mocks'
import { InMemoryProductRepository } from '../../../repositories/implementations/in-memory'
import { CreateProductUseCase } from './CreateProductUseCase'

describe('Create Product use case', () => {
  let inMemoryProductRepository: InMemoryProductRepository
  let createProductUseCase: CreateProductUseCase

  beforeAll(() => {
    inMemoryProductRepository = new InMemoryProductRepository()
    createProductUseCase = new CreateProductUseCase(inMemoryProductRepository)
  })

  it('Should be able to create a new Product ', async () => {
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
  })

  it('Should not be able to create a new Product with an name that already exists', async () => {
    await expect(
      createProductUseCase.execute(createProductMock)
    ).rejects.toThrow('Product already exists')
  })

  it('Should not be able to create a new Product with an invalid name', async () => {
    inMemoryProductRepository.products =
      inMemoryProductRepository.products.filter(
        (product) => product.name !== createProductMock.name
      )

    await expect(
      createProductUseCase.execute({
        ...createProductMock,
        name: 'i'
      })
    ).rejects.toThrow('Invalid name')
  })

  it('Should not be able to create a new Product with an invalid description', async () => {
    inMemoryProductRepository.products =
      inMemoryProductRepository.products.filter(
        (product) => product.name !== createProductMock.name
      )

    await expect(
      createProductUseCase.execute({
        ...createProductMock,
        description: 'a'
      })
    ).rejects.toThrow('Invalid description')
  })

  it('Should not be able to create a new Product with an invalid price', async () => {
    inMemoryProductRepository.products =
      inMemoryProductRepository.products.filter(
        (product) => product.name !== createProductMock.name
      )

    await expect(
      createProductUseCase.execute({
        ...createProductMock,
        price: -1
      })
    ).rejects.toThrow('Invalid price')
  })

  it('Should not be able to create a new Product with an invalid stock', async () => {
    inMemoryProductRepository.products =
      inMemoryProductRepository.products.filter(
        (product) => product.name !== createProductMock.name
      )

    await expect(
      createProductUseCase.execute({
        ...createProductMock,
        stock: -1
      })
    ).rejects.toThrow('Invalid stock')
  })

  it('Should not be able to create a new Product with an invalid image_url', async () => {
    inMemoryProductRepository.products =
      inMemoryProductRepository.products.filter(
        (product) => product.name !== createProductMock.name
      )

    await expect(
      createProductUseCase.execute({
        ...createProductMock,
        image_url: 'a'
      })
    ).rejects.toThrow('Invalid image_url')
  })
})
