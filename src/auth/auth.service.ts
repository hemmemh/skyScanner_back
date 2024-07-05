import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/schemas/User.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { registerDTO } from './DTO/registerDTO';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
     
    constructor(
        private usersService:UserService,
        private jwtService: JwtService,
    ){
    }



}
