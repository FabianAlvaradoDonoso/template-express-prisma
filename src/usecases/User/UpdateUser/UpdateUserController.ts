import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { email, name, phone, password, role_id, status, city, address } =
      request.body

    try {
      const data = await this.updateUserUseCase.execute(id, {
        email,
        name,
        phone,
        password,
        role_id,
        status,
        city,
        address
      })

      return response.status(200).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
