import { IUserRequest } from '../dtos'
import { faker } from '@faker-js/faker'

export const createUserMock: IUserRequest = {
  email: 'create@mail.com',
  name: 'Create',
  phone: faker.phone.number(),
  password: faker.internet.password(),
  role_id: '0bd843c0-ca9f-4d75-884c-3e2be75f5f70',
  status: faker.datatype.boolean(),
  city: faker.location.city(),
  address: faker.location.streetAddress()
}

export const updateUserMock: IUserRequest = {
  email: 'update@mail.com',
  name: 'Update',
  phone: faker.phone.number(),
  password: faker.internet.password(),
  role_id: '0bd843c0-ca9f-4d75-884c-3e2be75f5f70',
  status: faker.datatype.boolean(),
  city: faker.location.city(),
  address: faker.location.streetAddress()
}
