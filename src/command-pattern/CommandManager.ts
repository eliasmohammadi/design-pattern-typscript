import {ICommand} from "./ICommand";

export class CommandManager {
    invoke(command: ICommand): any {
        return command.execute()
    }
}