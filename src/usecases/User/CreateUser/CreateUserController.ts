import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, phone, password, role_id, status, city, address } =
      request.body

    try {
      const data = await this.createUserUseCase.execute({
        email,
        name,
        phone,
        password,
        role_id,
        status,
        city,
        address
      })

      return response.status(201).json(data)
    } catch (err: any) {
      return response.status(400).json({
        message: err?.message || 'Unexpected error.'
      })
    }
  }
}
