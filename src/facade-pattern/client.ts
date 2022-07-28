import {UserService} from "./service";
import {User} from "./repository";

/**
 * step #4: use the facade class to access the subsystem
 * */
export class Client {
    constructor(private readonly _userService: UserService) {
    }

    createAccount(username: String) {
        this._userService.createUser(username)
    }

    checkUser(username: User['name']): User | null {
        /***
         * the client doesn't know anything about cache and database
         */
        return this._userService.fetchUser(username)
    }

}