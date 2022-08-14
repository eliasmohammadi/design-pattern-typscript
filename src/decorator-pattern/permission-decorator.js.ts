import {IPermission} from './permission'


export abstract class PermissionDecorator implements IPermission {

    protected permission : IPermission

    protected constructor(permission : IPermission) {
        this.permission = permission
    }

    checkPermission(): boolean {
        return this.permission.checkPermission()
    }
}