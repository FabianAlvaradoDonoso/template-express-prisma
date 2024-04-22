import { Request, Response } from 'express'
import { FindByNameProductUseCase } from './FindByNameProductUseCase'

export class FindByNameProductController {
  constructor(private findByNameProductUseCase: FindByNameProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.params
      const data = await this.findByNameProductUseCase.execute(name)
      return response.status(200).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
