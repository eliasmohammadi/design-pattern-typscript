import {FileImporter} from "./file-importer.context";

const files = [
    "file_1",
    "file_2"
]

const importer = new FileImporter(files.length)

importer.readFile('file_1')
importer.insertFile('file_1')
importer.hasNext()

importer.readFile('file_2')
importer.insertFile('file_2')
importer.hasNext()

importer.hasNext()











