import { Module } from '@nestjs/common';
import { Layer } from './provider.layer'
@Module({
  imports: [],
  controllers: [],
  providers: [Layer],
  exports: [Layer]
})
export class RepoModule {}
