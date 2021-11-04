import { Injectable } from '@nestjs/common'
import { Provider } from '../define'

@Injectable()
export class FooProvider implements Provider<{ name: string }, { title: string }>{
  resourceType = 'foo'
  
  async send(id: string, data: { title: string}) {
    return { name: 'mocked name foo'}
  }

  async getExtraData(id: string) {
    return {}
  }
}