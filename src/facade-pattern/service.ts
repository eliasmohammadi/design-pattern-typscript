/**
 * step #3: create facade class and wrap the classes tha implement the interface
 * */
import {User, UserCacheRepository, UserDatabaseRepository} from "./repository";

export class UserService {
    private _userDbRepo: UserDatabaseRepository
    private _userCacheRepo: UserCacheRepository

    constructor() {
        this._userDbRepo = new UserDatabaseRepository()
        this._userCacheRepo = new UserCacheRepository()
    }

    createUser(username: String) {
        this._userDbRepo.insert({name: username})
    }

    /**
     * hide subsystem's complexity
     * */
    fetchUser(username: User['name']): User | null {
        const cacheUser = this._userCacheRepo.fetch(username)
        if (cacheUser) {
            console.log(`read ${cacheUser.name} from cache`)
            return cacheUser
        }
        const dbUser = this._userDbRepo.fetch(username)
        if (dbUser) {
            console.log(`read ${dbUser.name} from database`)
            this._userCacheRepo.insert(dbUser)
            return dbUser
        }
        console.log(`${username} not found!`)
        return null
    }
}