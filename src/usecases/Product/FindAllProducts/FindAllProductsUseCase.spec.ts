// import { FindAllProductsUseCase } from './FindAllProductsUseCase'
// import {
//   InMemoryRoleRepository,
//   InMemoryProductRepository
// } from '../../../repositories/implementations/in-memory'
// import { CreateProductUseCase } from '../FindAllProducts/FindAllProductsUseCase'
// import { createProductMock } from '../../../mocks'

// describe('Find all Products use case', () => {
//   let inMemoryProductRepository: InMemoryProductRepository
//   let inMemoryRoleRepository: InMemoryRoleRepository
//   let createProductUseCase: CreateProductUseCase
//   let findAllProductsUseCase: FindAllProductsUseCase

//   beforeAll(() => {
//     inMemoryProductRepository = new InMemoryProductRepository()
//     inMemoryRoleRepository = new InMemoryRoleRepository()

//     createProductUseCase = new CreateProductUseCase(
//       inMemoryProductRepository,
//       inMemoryRoleRepository
//     )
//     findAllProductsUseCase = new FindAllProductsUseCase(inMemoryProductRepository)
//   })

//   it('Should be able to find all Products', async () => {
//     await expect(
//       createProductUseCase.execute(createProductMock)
//     ).resolves.not.toThrow()

//     expect(inMemoryProductRepository.users).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           email: 'create@mail.com'
//         })
//       ])
//     )

//     await expect(findAllProductsUseCase.execute(1, 10)).resolves.not.toThrow()
//     expect(inMemoryProductRepository.users.length).toEqual(1)
//   })
// })
