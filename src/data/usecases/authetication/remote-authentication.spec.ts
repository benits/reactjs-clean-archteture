import { mockAuthentication } from '../../../domain/test/mock-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

import faker from 'faker'

type SutTypes ={
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('should call HttpClient with correct body', async () => {
    const mockedAuthenticationParams = mockAuthentication()
    const { sut, httpPostClientSpy } = makeSut()

    await sut.auth(mockedAuthenticationParams)

    expect(httpPostClientSpy.body).toEqual(mockedAuthenticationParams)
  })
})
