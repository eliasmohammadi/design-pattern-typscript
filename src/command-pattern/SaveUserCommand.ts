import {ICommand} from "./ICommand";
import {User} from "./user.model";
import {IRepository, UserRepository} from "./repository";

export class SaveUserCommand implements ICommand {
    private _repo: IRepository<User>
    constructor(private _user: User) {
        this._repo = new UserRepository()
    }

    execute(): any {
        this._repo.save(this._user);
    }
}