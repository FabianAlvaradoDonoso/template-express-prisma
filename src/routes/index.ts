import { Router } from 'express'
import { PREFIX_ROUTE } from '../core/url' // Prefix Global route
import { roleRoutes } from './role/role.routes'

import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes'

const theme = new SwaggerTheme()

const routes = Router()

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'El Jardin de Berni API',
      version: '1.0.0',
      description: 'A simple Express Library API',
      website: 'https://el-jardin-de-berni-frontend.pages.dev/',
      contact: {
        name: 'Fabian Alvarado Donoso',
        url: 'https://portafolio-zeta-orpin.vercel.app/',
        email: 'fabian.alvarado1008@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1'
      }
    ]
  },
  apis: ['**/*.ts']
}

const specs = swaggerJsDoc(options)
routes.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(specs, {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK)
  })
)

routes.use(`${PREFIX_ROUTE}/roles`, roleRoutes)

export { routes }
