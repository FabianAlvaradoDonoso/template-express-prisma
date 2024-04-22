import { Router, request, response } from 'express'

import { createUserFactory } from '../../usecases/User/CreateUser/CreateUserFactory'
import { findAllUsersFactory } from '../../usecases/User/FindAllUsers/FindAllUsersFactory'
import { findByEmailUserFactory } from '../../usecases/User/FindByEmailUser/FindByEmailUserFactory'
import { findByIdUserFactory } from '../../usecases/User/FindByIdUser/FindByIdUserFactory'
import { updateUserFactory } from '../../usecases/User/UpdateUser/UpdateUserFactory'
import { deleteUserFactory } from '../../usecases/User/DeleteUser/DeleteUserFactory'
import { loginUserFactory } from '../../usecases/User/LoginUser/LoginUserFactory'

const userRoutes = Router()

userRoutes
  .route('/')
  .get((request, response) => {
    return findAllUsersFactory().handle(request, response)
  })
  .post((request, response) => {
    return createUserFactory().handle(request, response)
  })

userRoutes
  .route('/:id')
  .get((request, response) => {
    return findByIdUserFactory().handle(request, response)
  })
  .put((request, response) => {
    return updateUserFactory().handle(request, response)
  })
  .delete((request, response) => {
    return deleteUserFactory().handle(request, response)
  })

userRoutes.route('/email/:email').get((request, response) => {
  return findByEmailUserFactory().handle(request, response)
})

userRoutes.route('/login').post((request, response) => {
  return loginUserFactory().handle(request, response)
})

export { userRoutes }
