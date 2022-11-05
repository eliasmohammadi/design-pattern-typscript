import {CommandManager} from "./CommandManager";
import {User} from "./user.model";
import {SaveUserCommand} from "./SaveUserCommand";
import {UpdateUserCommand} from "./UpdateUserCommand";

export class UserService {
    constructor(private readonly _commandManager: CommandManager) {
    }

    insertUser(user: User) {
        const saveCommand = new SaveUserCommand(user);
        this._commandManager.invoke(saveCommand)
    }

    updateUser(oldUser: User, newUser: User) {
        const updateCommand = new UpdateUserCommand(oldUser, newUser);
        this._commandManager.invoke(updateCommand)
    }
}