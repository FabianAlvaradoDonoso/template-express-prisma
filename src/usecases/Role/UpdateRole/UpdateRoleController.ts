import { Request, Response } from 'express'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { description, name } = request.body

    try {
      const data = await this.updateRoleUseCase.execute(id, {
        description,
        name
      })

      return response.status(200).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
