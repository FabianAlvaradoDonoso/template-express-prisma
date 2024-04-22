import { Request, Response } from 'express'
import { FindByIdProductUseCase } from './FindByIdProductUseCase'

export class FindByIdProductController {
  constructor(private findByIdProductUseCase: FindByIdProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const data = await this.findByIdProductUseCase.execute(id)
      return response.status(200).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
