import {Entity, Query, TemplateExport} from "./template-export";

export class MongoDbExporter extends TemplateExport {


    connectToDatabase(dbName: string): void {
        console.log(`connect to mongodb : ${dbName}`)
    }

    convertResponse(entities: Array<Entity>): Array<Entity> {
        return [
            {
                name: "converted MongoDb entity",
                toString(): string {
                    return `entity: ${this.name}`
                }
            }
        ];
    }

    dump(query: Query): Array<Entity> {
        return [
            {
                name: "mongoEntity",
                toString(): string {
                    return `entity: ${this.name}`
                }
            }
        ];
    }

    parseQuery(query: string): Query {
        return {
            query: `this is ${query}`
        };
    }
}


export class ElasticsearchExporter extends TemplateExport {
    protected connectToDatabase(dbName: string): void {
        console.log(`connect to elasticsearch:  ${dbName}`)
    }

    protected convertResponse(entities: Array<Entity>): Array<Entity> {
        return [
            {
                name: "converted elasticsearch entity",
                toString(): string {
                    return `entity : ${this.name}`
                }
            }

        ];
    }

    protected dump(query: Query): Array<Entity> {
        return [
            {
                name: "elasticsearch entity",
                toString(): string {
                    return `entity : ${this.name}`
                }
            }
        ];
    }

    protected parseQuery(query: string): Query {
        return {
            query: "this is elasticsearch query"
        };
    }

}