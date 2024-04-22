import { resultPaginated } from './pagination'

describe('Pagination function', () => {
  it('should return a paginated result', async () => {
    const content = Array.from({ length: 100 }, (_, i) => i)
    const page = 1
    const perPage = 10

    const result = await resultPaginated(content, page, perPage)

    expect(result.data).toHaveLength(perPage)
    expect(result.paginator.currentPage).toBe(page)
    expect(result.paginator.pages).toBe(10)
    expect(result.paginator.nextPage).toBe(2)
    expect(result.paginator.prevPage).toBe(1)
    expect(result.paginator.perPage).toBe(perPage)
    expect(result.paginator.totalResults).toBe(100)
    expect(result.paginator.totalCurrentResults).toBe(perPage)
  })

  it('should return a paginated without result', async () => {
    const content: any = []
    const page = 1
    const perPage = 10

    const result = await resultPaginated(content, page, perPage)

    expect(result.data).toHaveLength(0)
    expect(result.paginator.currentPage).toBe(page)
    expect(result.paginator.pages).toBe(0)
    expect(result.paginator.nextPage).toBe(1)
    expect(result.paginator.prevPage).toBe(1)
    expect(result.paginator.perPage).toBe(perPage)
    expect(result.paginator.totalResults).toBe(0)
    expect(result.paginator.totalCurrentResults).toBe(0)
  })
})
