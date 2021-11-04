export interface Provider<T, DATA> {
  resourceType: string
  send: (someId: string, data: DATA) => Promise<T>
  getExtraData: (someId: string) => Promise<unknown>
}