import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerDTO } from 'src/auth/DTO/registerDTO';
import { User } from 'src/schemas/User.schema';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private UserRepo: Repository<User>,
      ) {}

    getUserByEmail(email:string){
        return this.UserRepo.findOne({where:{email}})
    }

    create(user:registerDTO){
        return this.UserRepo.save(user)
    }
}
