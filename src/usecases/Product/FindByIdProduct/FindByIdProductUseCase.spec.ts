// import { FindByIdProductUseCase } from './FindByIdProductUseCase'
// import {
//   InMemoryRoleRepository,
//   InMemoryProductRepository
// } from '../../../repositories/implementations/in-memory'
// import { CreateProductUseCase } from '../CreateProduct/CreateProductUseCase'
// import { IProduct } from '../../../dtos/Product'
// import { createProductMock } from '../../../mocks'

// describe('Find an Product use case', () => {
//   let inMemoryProductRepository: InMemoryProductRepository
//   let inMemoryRoleRepository: InMemoryRoleRepository
//   let findByIdProductUseCase: FindByIdProductUseCase
//   let createProductUseCase: CreateProductUseCase

//   beforeAll(() => {
//     inMemoryProductRepository = new InMemoryProductRepository()
//     inMemoryRoleRepository = new InMemoryRoleRepository()
//     findByIdProductUseCase = new FindByIdProductUseCase(
//       inMemoryProductRepository
//     )
//     createProductUseCase = new CreateProductUseCase(
//       inMemoryProductRepository,
//       inMemoryRoleRepository
//     )
//   })

//   it('Should be able to find id Product', async () => {
//     const result = await createProductUseCase.execute(createProductMock)
//     const id = (result as IProduct).id

//     await expect(findByIdProductUseCase.execute(id)).resolves.not.toThrow()
//   })

//   it('Should not be able to find id Product that does not exist', async () => {
//     const id = '123'

//     await expect(findByIdProductUseCase.execute(id)).rejects.toThrow(
//       'Product does not exists.'
//     )
//   })
// })
