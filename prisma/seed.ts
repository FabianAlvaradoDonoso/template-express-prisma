// app/prisma/seed.ts
import { PrismaClient, User, Role, Product } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function createRoles() {
  await prisma.role.deleteMany({}) // use with caution.

  const role_id = [uuidv4(), uuidv4()]

  const roles: Role[] = [
    {
      id: role_id[0],
      name: 'admin',
      description: 'Admin role',
      created_at: faker.date.recent(),
      updated_at: faker.date.recent()
    },
    {
      id: role_id[1],
      name: 'user',
      description: 'User role',
      created_at: faker.date.recent(),
      updated_at: faker.date.recent()
    }
  ]

  const addRoles = async () => await prisma.role.createMany({ data: roles })

  addRoles()

  return role_id
}

async function createUsers(amountOfUsers: number, roles: string[] = []) {
  await prisma.user.deleteMany({}) // use with caution.
  const users: User[] = []

  for (let i = 0; i < amountOfUsers; i++) {
    const user: User = {
      id: uuidv4(),
      email: faker.internet.email(),
      name: faker.string.alpha.name,
      phone: faker.phone.number(),
      password: faker.internet.password(),
      role_id: roles[faker.number.int({ min: 0, max: roles.length - 1 })],
      status: faker.datatype.boolean(),
      city: faker.location.city(),
      address: faker.location.streetAddress(),
      created_at: faker.date.recent(),
      updated_at: faker.date.recent()
    }
    users.push(user)
  }

  const addUsers = async () => await prisma.user.createMany({ data: users })
  addUsers()
}

async function createProducts(amount: number) {
  await prisma.product.deleteMany({}) // use with caution.
  const products: Product[] = []

  for (let i = 0; i < amount; i++) {
    const product: Product = {
      id: uuidv4(),
      name: faker.commerce.productName(),
      price: Math.trunc(+faker.commerce.price()),
      stock: faker.number.int({ min: 0, max: 100 }),
      description: faker.commerce.productDescription(),
      image_url: faker.image.url(),
      status: faker.datatype.boolean(),
      created_at: faker.date.recent(),
      updated_at: faker.date.recent()
    }
    products.push(product)
  }

  const addProducts = async () =>
    await prisma.product.createMany({ data: products })
  addProducts()
}

async function main() {
  const roles = await createRoles()
  await createUsers(10, roles)
  await createProducts(30)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
