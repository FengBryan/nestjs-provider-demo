import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/app.module';
import { RepoModule } from './repo/repo.module';

@Module({
  imports: [RepoModule, FooModule, BarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
