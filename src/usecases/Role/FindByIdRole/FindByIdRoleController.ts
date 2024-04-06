import { Request, Response } from 'express'
import { FindByIdRoleUseCase } from './FindByIdRoleUseCase'

export class FindByIdRoleController {
  constructor(private findByIdRoleUseCase: FindByIdRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdRoleUseCase.execute(id)
      return response.status(200).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
