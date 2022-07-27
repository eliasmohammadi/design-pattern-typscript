export abstract class AbstractBankAccount {

    constructor(protected name: string) { }

    public setName(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name
    }

    public set charge(charge: number) {
        this.charge = charge
    }

    public get charge(): number {
        return this.charge
    }

    printAccount(): string {
        return `Account created for ${this.name} \n`
    }
}

export interface IBankAccount {
    deposit(amount: number): void
}

export interface IInvestmentBankAccount extends IBankAccount {
    calcProfit(): number
}

export class LocalInvestmentAccount extends AbstractBankAccount implements IInvestmentBankAccount {

    constructor(accountName: string, private _profitFactor: number = 1) {
        super(accountName)
    }

    calcProfit(): number {
        return this._profitFactor * this.charge
    }
    deposit(amount: number): void {
        this.charge = this.charge
    }

    printAccount(): string {
        let message: string = super.printAccount()
        return `${message} and Account Type is: LocalInvestmentAccount`
    }

}

export class ForiegnInvestmentAccount extends AbstractBankAccount implements IInvestmentBankAccount {

    constructor(accountName: string, private _profitFactor: number= 1) {
        super(accountName)

    }
    calcProfit(): number {
        return this._profitFactor * this.charge
    }
    deposit(amount: number): void {
        this.charge = amount
    }

    setProfitFactor(proficFactor: number) {
        this._profitFactor = proficFactor
    }
    getProfitFactor(): number {
        return this._profitFactor
    }
    printAccount(): string {
        let message: string = super.printAccount()
        return `${message} and Account Type is: ForiegnInvestmentAccount`
    }
}


export class LocalAccount extends AbstractBankAccount implements IBankAccount {
    constructor(accountName: string) {
        super(accountName)

    }
    deposit(amount: number): void {
        this.charge = amount
    }

    printAccount(): string {
        let message: string = super.printAccount()
        return `${message} and Account Type is: LocalAccount`
    }
}

export class ForiegnAccount extends AbstractBankAccount implements IBankAccount {
    constructor(accountName: string, private _currency: string= 'usd') {
        super(accountName)
    }

    deposit(amount: number): void {
        this.charge = amount
    }

    printAccount(): string {
        let message: string = super.printAccount()
        return `${message} and Account Type is: ForiegnAccount`
    }
}

