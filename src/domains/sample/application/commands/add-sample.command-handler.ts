import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddSampleCommand } from "./add-sample.command";

@CommandHandler(AddSampleCommand)
export class AddSampleCommandHandler implements ICommandHandler<AddSampleCommand> {
  async execute(command: AddSampleCommand): Promise<any> {
    const { name } = command.ao;
    addWishList();
    console.log(name);
  }
}

const addWishList = () => {
  console.log('hi');
  return 'hi'
}
