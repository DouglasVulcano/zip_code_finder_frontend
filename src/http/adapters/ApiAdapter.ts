export interface ApiAdapter {
  request: (method: string, path: string, body?: object) => Promise<Response>
}
