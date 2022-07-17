import { FindSampleByNameQuery } from './find-sample-by-name.query';
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

@QueryHandler(FindSampleByNameQuery)
export class FindSampleByNameQueryHandler implements IQueryHandler<FindSampleByNameQuery> {
  async execute(query: FindSampleByNameQuery): Promise<any> {
    const { name } = query.ao;
    return { name };
  }
}