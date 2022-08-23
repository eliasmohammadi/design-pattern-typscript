import {ElasticsearchExporter, MongoDbExporter} from './exporter'


new MongoDbExporter().exportEntities('localMongo', 'mongoQuery')
console.log("============================================")
new ElasticsearchExporter().exportEntities('CloudElasticService', 'elasticQuery')