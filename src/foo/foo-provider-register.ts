import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Layer } from "src/repo/provider.layer";
import { FooProvider } from './foo.provider'

@Injectable()
export class FooProviderRegister implements OnApplicationBootstrap {
  constructor(protected readonly provider: FooProvider, protected readonly layer: Layer) {}
  onApplicationBootstrap() {
    this.layer.registerResourceTypeProvider(this.provider)
  }
}