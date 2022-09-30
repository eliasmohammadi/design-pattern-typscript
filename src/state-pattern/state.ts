import {FileImporter} from "./file-importer.context";

export interface IState {
    readFile(filename: string): void

    insertFile(filename: string): void

    hasNext(): void
}


export class ReadState implements IState {
    constructor(private fileImporter: FileImporter) {
    }

    hasNext(): void {
        console.log('Read State: one file is in progress ')
    }

    insertFile(filename: string): void {
        console.log('Read State: first read file')
    }

    readFile(filename: string): void {
        console.log(`Read State: read file: ${filename}`)
        this.fileImporter.setState(this.fileImporter.getPendingState())
    }
}

export class PendingState implements IState {
    constructor(private fileImporter: FileImporter) {
    }

    hasNext(): void {
        console.log('Pending State: file in progress')
    }

    insertFile(filename: string): void {
        console.log(`Pending State: insert file: ${filename} completed`)
        this.fileImporter.setState(this.fileImporter.getCompleteState())
    }

    readFile(filename: string): void {
        console.log(`Pending State: file ${filename} is in progress`)
    }

}

export class CompleteState implements IState {
    constructor(private fileImporter: FileImporter) {
    }

    hasNext(): void {
        this.fileImporter.setFilesCount(this.fileImporter.getFilesCount() - 1)
        if (this.fileImporter.getFilesCount() > 0) {
            console.log('Complete State: directory has more file')
            this.fileImporter.setState(this.fileImporter.getReadState())
        } else {
            console.log('Complete State: all files inserted')
            this.fileImporter.setState(this.fileImporter.getFinishState())
        }
    }

    insertFile(filename: string): void {
        console.log(`Complete State: insert file ${filename} completed`)
    }

    readFile(filename: string): void {
        console.log(`Complete State: go to read next file`)
    }

}

export class FinishState implements IState {

    constructor(private fileImporter: FileImporter) {
    }

    hasNext(): void {
        console.log('Finish State : directory has no more files')
    }

    insertFile(filename: string): void {
        console.log('Finish State : all files inserted')
    }

    readFile(filename: string): void {
        console.log('Finish State : no file available to read')
    }

}
