export interface ApiAdapterInterface {
  request: (method: string, path: string, body?: object) => Promise<Response>
}
