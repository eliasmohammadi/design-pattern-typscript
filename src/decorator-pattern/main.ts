import {IPermission} from "./permission";
import {BasicPermission} from "./basic-permission";
import {SearchPermission} from "./search-permission";
import {DownloadPermission} from "./download-permission";


function runWithScenario() {
    console.log('----------------- scenario#1 : only search permission -----------------')
    let onlySearchPermission : IPermission = new BasicPermission(true)
    onlySearchPermission = new SearchPermission(onlySearchPermission)
    onlySearchPermission.checkPermission()
    console.log('\n')


    console.log('----------------- scenario#2 : search & download permission -----------------')
    let permission : IPermission = new BasicPermission(true)
    permission = new SearchPermission(permission)
    permission = new DownloadPermission(permission)
    permission.checkPermission()
    console.log('\n')


    console.log('----------------- scenario#3 : no permission -----------------')
    let noPermission : IPermission = new BasicPermission(false)
    noPermission = new SearchPermission(noPermission)
    noPermission = new DownloadPermission(noPermission)
    noPermission.checkPermission()
    console.log('\n')
}

type User  = {
    authenticated:boolean,
    permissions:Array<String>
}

class PermissionManager {
    static checkUserPermission(user: User) {

        let permission : IPermission = new BasicPermission(user.authenticated)

        for (let p of user.permissions) {
            if(p === 'search')
                permission = new SearchPermission(permission)
            if(p === 'download')
                permission = new DownloadPermission(permission)
        }

        permission.checkPermission()
    }
}


function runWithPermissionManager () {
    const user1  = {
        authenticated:true,
        permissions : ["search","download"]
    }


    console.log('------------------- user#1 permissions -------------------')
    PermissionManager.checkUserPermission(user1)
    console.log('\n')
    const user2  = {
        authenticated:true,
        permissions : ["download"]
    }
    console.log('------------------- user#2 permissions -------------------')
    PermissionManager.checkUserPermission(user2)
    console.log('\n')
}

runWithPermissionManager()




