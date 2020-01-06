import { Module } from '@nestjs/common';
<% if (MongoDB) { %>// mongo mongoose modules and example
import { CatsModule } from './cats/cats.module';
<% } %><% if (MySQL) { %>// mysql typeorm modules and example
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';
<% } %><% if (redis) { %>// redis
const redis = require("redis");
const client = redis.createClient({
  host: 'redis',
  port: 6379
});
client.set("key", "value");
client.get("key", function (err, reply) {
    console.log('redis reply', reply);
});<% } %>
@Module({
  imports: [<% if (MySQL) { %>
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Photo],
      synchronize: true,
    }),
    PhotoModule,<% } %><% if (MongoDB) { %>
    CatsModule,<% } %>
  ],
})
export class AppModule {}
