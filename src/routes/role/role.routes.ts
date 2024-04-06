import { Router } from 'express'

import { createRoleFactory } from '../../usecases/Role/CreateRole/CreateRoleFactory'
import { findAllRolesFactory } from '../../usecases/Role/FindAllRoles/FindAllRolesFactory'
import { findByIdRoleFactory } from '../../usecases/Role/FindByIdRole/FindByIdRoleFactory'
import { updateRoleFactory } from '../../usecases/Role/UpdateRole/UpdateRoleFactory'
import { deleteRoleFactory } from '../../usecases/Role/DeleteRole/DeleteRoleFactory'

const roleRoutes = Router()

roleRoutes
  .route('/')
  .get((request, response) => {
    return findAllRolesFactory().handle(request, response)
  })
  .post((request, response) => {
    return createRoleFactory().handle(request, response)
  })

roleRoutes
  .route('/:id')
  .get((request, response) => {
    return findByIdRoleFactory().handle(request, response)
  })
  .put((request, response) => {
    return updateRoleFactory().handle(request, response)
  })
  .delete((request, response) => {
    return deleteRoleFactory().handle(request, response)
  })

export { roleRoutes }
