import { Injectable } from '@nestjs/common'
import { Provider } from '../define'
@Injectable()
export class BarProvider implements Provider<{ name: string }, { title: string }>{
  resourceType: 'bar'
  
  async send(id: string, data: { title: string}) {
    return { name: 'mocked name'}
  }

  async getExtraData(id: string) {
    return {}
  }
}