import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/schemas/User.schema';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[
    TypeOrmModule.forFeature([
      User
    ]),
  ],
  exports:[
    UserService
  ]
})
export class UserModule {

}
