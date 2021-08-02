import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  urlPost?: string

  async post (urlToPost: string): Promise<void> {
    this.urlPost = urlToPost

    return Promise.resolve()
  }
}
