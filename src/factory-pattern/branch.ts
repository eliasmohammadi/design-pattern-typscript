import { BankAccountFactory} from "./factory";

export class Branch {
    constructor(private factory: BankAccountFactory) { }
    createAccount(accountName: string ,type:string) : void {
        console.log(this.factory.createAccount(accountName,type))
    }
}