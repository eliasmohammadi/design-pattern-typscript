import {User} from "./user.model";

export interface IRepository<T> {
    save(t: T):any
    update(oldEntity:T,newEntity: T):any
}

export class UserRepository implements IRepository<User> {
    save(t: User): any {
        console.log(`${t.toString()} inserted.`)
    }

    update(oldEntity: User, newEntity: User): any {
        console.log(`updated ${oldEntity.toString()} to ${newEntity.toString()}`)
    }

}

