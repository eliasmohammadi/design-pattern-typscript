export type User = {
    id?: number,
    name?: String
}

/**
 * step #1 : Design the interface
 * */
export interface IUserRepository {
    insert(user: Partial<User>): void

    fetch(username: User['name']): User | null
}

export class Database {
    static users: Array<User> = []
}
export class CacheDb {
    static users : Array<User> = []
}

/**
 * step #2: implement the interface with one or more classes
 * */
export class UserCacheRepository implements IUserRepository {

    fetch(username: User["name"]): User {
        return CacheDb.users.filter(o => o.name === username)[0]
    }
    insert(user: Partial<User>): void {
        CacheDb.users.push({
            id:user.id,
            name:user.name
        })
    }
}
export class UserDatabaseRepository implements IUserRepository {
    fetch(username: User["name"]): User | null {
        return Database.users.filter(o => o.name === username)[0];
    }

    insert(user: Partial<User>): void {
        let index:number  = Database.users.length
        const createdId = index + 1
        Database.users.push(
            {
                id: createdId,
                name:user.name
            }
        )
    }
}