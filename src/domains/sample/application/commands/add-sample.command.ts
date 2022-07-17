import { ICommand } from "@nestjs/cqrs";

export class AddSampleCommand implements ICommand {
  constructor(
    readonly ao: {name: string},
  ) {}
}