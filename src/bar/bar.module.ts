import { Module } from '@nestjs/common';
import { RepoModule } from 'src/repo/repo.module';
import { BarProvider } from './bar.provider';
import { BarProviderRegister } from './foo-provider-register';

@Module({
  imports: [RepoModule],
  controllers: [],
  providers: [BarProvider, BarProviderRegister],
  exports: [BarProvider]
})
export class BarModule {}
