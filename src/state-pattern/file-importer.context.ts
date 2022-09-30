import {CompleteState, FinishState, IState, PendingState, ReadState} from "./state";

export class FileImporter {

    private readonly _readState: IState
    private readonly _pendingState: IState
    private readonly _completeState: IState
    private readonly _finishState: IState
    private _currentState: IState

    private filesCount: number = 0

    constructor(filesCount: number) {
        this.filesCount = filesCount
        this._readState = new ReadState(this)
        this._pendingState = new PendingState(this)
        this._completeState = new CompleteState(this)
        this._finishState = new FinishState(this)
        this._currentState = this.filesCount > 0 ? this._readState : this._finishState
    }

    getCurrentState() {
        return this._currentState
    }

    setState(state: IState) {
        this._currentState = state
    }

    getFilesCount(): number {
        return this.filesCount
    }


    readFile(filename: string) {
        this._currentState.readFile(filename)
    }

    insertFile(filename: string) {
        this._currentState.insertFile(filename)
    }

    hasNext() {
        this._currentState.hasNext()
    }

    getReadState(): IState {
        return this._readState
    }

    getCompleteState(): IState {
        return this._completeState
    }

    getPendingState(): IState {
        return this._pendingState
    }

    getFinishState(): IState {
        return this._finishState
    }

    setFilesCount(count: number) {
        this.filesCount = count
    }

}