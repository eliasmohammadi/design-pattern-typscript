import { AbstractBankAccount, ForiegnAccount, ForiegnInvestmentAccount, IBankAccount, LocalAccount, LocalInvestmentAccount } from "./bank-account"

export abstract class BankAccountFactory {

    createAccount(accountName:string, type: string): string {
        const bankAccount  = this.create(accountName,type)
        return bankAccount.printAccount()
    }
    abstract create(accountName:string, type: string): AbstractBankAccount
}


export class LocalBankAccountFactory extends BankAccountFactory {
    create(accountName:string,type: string): AbstractBankAccount {
        let bankAccount: AbstractBankAccount
        if (type === 'investment') {
            bankAccount = new LocalInvestmentAccount(accountName)
        } else if (type === 'simple') {
            bankAccount = new LocalAccount(accountName)
        } else {
            throw new Error('No bank account available')
        }
        return bankAccount
    }
}
    
export class ForiegnBankAccountFactory extends BankAccountFactory {
    create(accountName:string, type: string): AbstractBankAccount {
        let bankAccount: AbstractBankAccount
        if (type === 'investment') {
            bankAccount = new ForiegnInvestmentAccount(accountName)
        } else if (type === 'simple') {
            bankAccount = new ForiegnAccount(accountName)
        } else {
            throw new Error('No bank account available')
        }
        return bankAccount
    }
}