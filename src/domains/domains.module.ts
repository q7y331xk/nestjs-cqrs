import { SampleModule } from './sample/sample.module';
import { Module } from "@nestjs/common";

@Module({
  imports: [SampleModule],
})
export class DomainsModule {}