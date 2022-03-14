import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { User } from "./user/entities/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV == "dev" ? ".env.dev" : ".env.prod",
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.NODE_ENV == "dev" ? "localhost" : "localhost",
      port: process.env.NODE_ENV == "dev" ? 3306 : 3306,
      username: process.env.NODE_ENV == "dev" ? "root" : "root",
      password: process.env.NODE_ENV == "dev" ? "clzls5akfl!Q" : "clzls5akfl!Q",
      database: process.env.NODE_ENV == "dev" ? "sample_nest" : "sample_nest",
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
