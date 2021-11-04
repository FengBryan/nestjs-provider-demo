import {  Module } from '@nestjs/common';
import { FooProvider } from './foo.provider'
import { RepoModule } from '../repo/repo.module'
import { FooProviderRegister } from './foo-provider-register';

@Module({
  imports: [RepoModule],
  controllers: [],
  providers: [FooProvider, FooProviderRegister],
  exports: [FooProvider]
})
export class FooModule {}
