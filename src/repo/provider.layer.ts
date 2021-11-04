import { Injectable } from "@nestjs/common"
import { Provider } from '../define'
@Injectable()
export class Layer {
  protected readonly registry: Map<string, Provider<unknown, unknown>> = new Map()

  registerResourceTypeProvider(provider: Provider<unknown, unknown>) {
    if (this.registry.has(provider.resourceType)) {
      throw new Error(
        `FileLikeContentResourceType provider "${provider.resourceType}" has been registered yet.`,
      )
    }
    this.registry.set(provider.resourceType, provider)
  }

  verifyResourceType(resourceType: string): boolean {
    return this.registry.has(resourceType)
  }

  provider<T = Provider<unknown, unknown>>(resourceType: string) {
    if (!this.verifyResourceType(resourceType)) {
      throw new Error(`FileLikeContentResourceType provider "${resourceType}" does not exist.`)
    }
    return this.registry.get(resourceType) as unknown as T
  }
}