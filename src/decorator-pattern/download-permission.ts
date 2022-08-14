import {PermissionDecorator} from "./permission-decorator.js";
import {IPermission} from "./permission";

export class DownloadPermission extends PermissionDecorator {

    private hasDownloadPermission = true


    constructor(permission:IPermission) {
        super(permission);
    }

    getDownloadPermission() : boolean {
        return this.hasDownloadPermission
    }


    checkPermission(): boolean {
        const checkDownload  = super.checkPermission() && this.getDownloadPermission();
        if(checkDownload)
            console.log("user has Download Permission")
        else {
            console.log("user unauthorized for download functionality")
        }
        return checkDownload
    }
}