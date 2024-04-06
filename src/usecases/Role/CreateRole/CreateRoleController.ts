import { Request, Response } from 'express'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    try {
      const data = await this.createRoleUseCase.execute({
        name,
        description
      })

      return response.status(201).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
