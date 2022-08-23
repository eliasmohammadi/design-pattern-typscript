export type Query = {
    query: string
}

export type Entity = {
    name: string,
    toString(): string
}


export abstract class TemplateExport {

    protected abstract parseQuery(query: string): Query;

    protected abstract dump(query: Query): Array<Entity>;

    protected abstract convertResponse(entities: Array<Entity>): Array<Entity>;

    protected abstract connectToDatabase(dbName: string): void

    public exportEntities(dbName: string, query: string) {
        this.connectToDatabase(dbName)
        const newQuery: Query = this.parseQuery(query)

        console.log(newQuery.query)
        const entities: Array<Entity> = this.dump(newQuery)
        entities.forEach(o => console.log(o.toString()))
        const convertedEntities: Array<Entity> = this.convertResponse(entities)
        convertedEntities.forEach(o => console.log(o.toString()))
    }
}
