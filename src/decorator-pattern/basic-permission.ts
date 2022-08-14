import {IPermission} from './permission'

export class BasicPermission implements IPermission {

    private readonly isAuthenticate: boolean = false

    constructor(isAuthenticate: boolean) {
        this.isAuthenticate = isAuthenticate
    }

    checkPermission(): boolean {
        if(this.isAuthenticate)
            console.log('authenticated user: has basic permission')
        else {
            console.log('user is not authenticated')
        }
        return this.isAuthenticate
    }

}