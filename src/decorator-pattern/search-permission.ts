import {PermissionDecorator} from "./permission-decorator.js";
import {IPermission} from "./permission";

export class SearchPermission extends PermissionDecorator {

    private hasSearchPermission: boolean = true

    constructor(permission: IPermission) {
        super(permission);
    }

    getSearchPermission(): boolean {
        return this.hasSearchPermission
    }

    checkPermission(): boolean {
        const checkSearch = super.checkPermission() && this.getSearchPermission()
        if (checkSearch)
            console.log("user has Search permission")
        else {
            console.log("user unauthorized for search functionality")
        }
        return checkSearch
    }
}