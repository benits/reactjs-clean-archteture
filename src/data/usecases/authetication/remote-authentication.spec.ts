import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      urlPost?: string

      async post (urlToPost: string): Promise<void> {
        this.urlPost = urlToPost

        return Promise.resolve()
      }
    }
    const url = 'any-url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    await sut.auth()
    expect(httpPostClientSpy.urlPost).toBe(url)
  })
})
