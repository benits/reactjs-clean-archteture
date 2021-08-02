import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = 'any-url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    await sut.auth()
    expect(httpPostClientSpy.urlPost).toBe(url)
  })
})
