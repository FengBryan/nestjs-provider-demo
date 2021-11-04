import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Provider } from './define';
import { Layer } from './repo/provider.layer';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    protected readonly layer: Layer,
  ) {}

  @Get()
  async getHello(@Query('name') name: string) {
    const layer = this.layer.provider<
      Provider<{ name: string }, { title: string }>
    >(name);
    return await layer.send('some mock id', { title: 'some mock title' });
  }
}
