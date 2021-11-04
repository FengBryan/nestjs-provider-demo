import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Layer } from "src/repo/provider.layer";
import { BarProvider } from './bar.provider'

@Injectable()
export class BarProviderRegister implements OnApplicationBootstrap {
  constructor(protected readonly provider: BarProvider, protected readonly layer: Layer) {}
  onApplicationBootstrap() {
    this.layer.registerResourceTypeProvider(this.provider)
  }
}