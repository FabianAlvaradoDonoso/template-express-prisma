import { Router } from 'express'

import { createProductFactory } from '../../usecases/Product/CreateProduct/CreateProductFactory'
import { findAllProductsFactory } from '../../usecases/Product/FindAllProducts/FindAllProductsFactory'
import { findByIdProductFactory } from '../../usecases/Product/FindByIdProduct/FindByIdProductFactory'
import { findByNameProductFactory } from '../../usecases/Product/FindByNameProduct/FindByNameProductFactory'
import { updateProductFactory } from '../../usecases/Product/UpdateProduct/UpdateProductFactory'
import { deleteProductFactory } from '../../usecases/Product/DeleteProduct/DeleteProductFactory'

const productRoutes = Router()

productRoutes
  .route('/')
  .get((request, response) => {
    return findAllProductsFactory().handle(request, response)
  })
  .post((request, response) => {
    return createProductFactory().handle(request, response)
  })

productRoutes
  .route('/:id')
  .get((request, response) => {
    return findByIdProductFactory().handle(request, response)
  })
  .post((request, response) => {
    return updateProductFactory().handle(request, response)
  })
  .delete((request, response) => {
    return deleteProductFactory().handle(request, response)
  })

productRoutes.route('/name/:name').get((request, response) => {
  return findByNameProductFactory().handle(request, response)
})

export { productRoutes }
