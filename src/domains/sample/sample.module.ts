import { FindSampleByNameQueryHandler } from './application/queries/find-sample-by-name.query-handler';
import { AddSampleCommandHandler } from './application/commands/add-sample.command-handler';
import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { SampleController } from "./interface/sample.controller";

@Module({
  imports: [CqrsModule],
  providers: [
    AddSampleCommandHandler,
    FindSampleByNameQueryHandler
  ],
  controllers: [SampleController],
})
export class SampleModule {}