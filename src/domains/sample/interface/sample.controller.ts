import { FindSampleByNameQuery } from './../application/queries/find-sample-by-name.query';
import { Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddSampleCommand } from "../application/commands/add-sample.command";

@Controller('sample')
export class SampleController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}
  
  @Get()
  async findSampleByName() {
    const name = 'name';
    const command = new FindSampleByNameQuery({ name });
    const { name: aaaa } = await this.queryBus.execute(command);
    console.log(aaaa);
    
    return aaaa;
  }

  @Post()
  addSample() {
    const name = 'name';
    const command = new AddSampleCommand({ name });
    const result = this.commandBus.execute(command);
    return result;
  }
}