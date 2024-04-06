import { Request, Response } from 'express'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      const data = await this.deleteRoleUseCase.execute(id)

      return response.status(204).end()
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
