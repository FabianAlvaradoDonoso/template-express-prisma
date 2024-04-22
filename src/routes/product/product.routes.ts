import { Router, request, response } from 'express'

// import { createProductFactory } from '../../usecases/Product/CreateProduct/CreateProductFactory'
import { findAllProductsFactory } from '../../usecases/Product/FindAllProducts/FindAllProductsFactory'
// import { findByEmailProductFactory } from '../../usecases/Product/FindByEmailProduct/FindByEmailProductFactory'
// import { findByIdProductFactory } from '../../usecases/Product/FindByIdProduct/FindByIdProductFactory'
// import { updateProductFactory } from '../../usecases/Product/UpdateProduct/UpdateProductFactory'
// import { deleteProductFactory } from '../../usecases/Product/DeleteProduct/DeleteProductFactory'
// import { loginProductFactory } from '../../usecases/Product/LoginProduct/LoginProductFactory'

const productRoutes = Router()

productRoutes.route('/').get((request, response) => {
  return findAllProductsFactory().handle(request, response)
})

export { productRoutes }
