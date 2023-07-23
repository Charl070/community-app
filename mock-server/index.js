import { createServer, RestSerializer, Model } from 'miragejs';
import * as mocks from './mocks';

export default function startMirage(timeout = 2000) {
  return createServer({
    environment: process.env.NODE_ENV,
    
    // added for dynamic route handling
    models: {
      file: Model,
      item: Model,
      report: Model,
    },

    routes() {
      this.urlPrefix = 'http://localhost';
      this.timing = timeout;

      /**
       * Add more routes to mock here, and add mock JSON data in the mocks folder
       */
      this.get('/api/example', () => mocks.example);
      this.get('/api/news', () => mocks.news);

      this.get('/api/files', (schema, request) => {
        return schema.files.all();
      });

      this.put('api/files/:id', (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody);
        const id = request.params.id;
        const file = schema.files.find(id);

        return file.update(newAttrs);
      })

      // News 
      this.get('/api/news', (schema, request) => {
        return schema.items.all()
      });
      this.get('/api/news/:id', (schema, request) => {
        const id = request.params.id;
        return schema.items.find(id)
      });

      // Reports
      this.get('/api/reports', (schema, request) => {
        return schema.reports.all()
      });
    },

    seeds(server) {
      // seeding File models from JSON file
      const { data } = mocks.files;
      data.forEach((file) => {
        server.create('file', file);
      })

      // News seedings
      const news = mocks.news;
      news.data.forEach((item) => {
        server.create('item', item);
      })

      // Reports seedings
      const reports = mocks.reports;
      reports.data.forEach((report) => {
        server.create('report', report);
      })
    },

    // customizing response to have 'data' instead of model name
    serializers: {
      application: RestSerializer.extend({
        keyForModel() {
          return 'data'
        }
      }),
    },
  });
}
