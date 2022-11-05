export class User {
    constructor(private _name: string, private _major?: string) {

    }

    toString(): string {
        return `User : ${this._name} --- ${this._major}`
    }
}