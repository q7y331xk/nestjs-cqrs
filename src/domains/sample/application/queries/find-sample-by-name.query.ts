import { IQuery } from "@nestjs/cqrs";

export class FindSampleByNameQuery implements IQuery {
  constructor(
    readonly ao: { name: string },
  ) {}
}