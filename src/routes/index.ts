import { Router } from 'express'
import { PREFIX_ROUTE } from '../core/url' // Prefix Global route
import { roleRoutes } from './role.routes'

const routes = Router()

routes.use(`${PREFIX_ROUTE}/roles`, roleRoutes)

export { routes }
