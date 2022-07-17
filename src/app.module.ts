import { DomainsModule } from './domains/domains.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DomainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
