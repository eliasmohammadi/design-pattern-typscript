import {ICommand} from "./ICommand";
import {User} from "./user.model";
import {IRepository, UserRepository} from "./repository";

export class UpdateUserCommand implements ICommand {
    private _repo: IRepository<User>

    constructor(private _oldUser: User, private _newUser: User) {
        this._repo = new UserRepository()
    }

    execute(): any {
        this._repo.update(this._oldUser, this._newUser);
    }
}