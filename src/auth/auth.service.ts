import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/flight/user/user.service';
import { User } from 'src/schemas/User.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { registerDTO } from './DTO/registerDTO';
@Injectable()
export class AuthService {
     
    constructor(
        private usersService:UserService,
        private jwtService: JwtService,
    ){
    }

    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.usersService.getUserByEmail(email);
        if (!user) {
          throw new BadRequestException('User not found');
        }
        const isMatch: boolean = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
          throw new BadRequestException('Password does not match');
        }
        return user;
      }



      async login(user: User): Promise<AccessToken> {
        const payload = { email: user.email, id: user.id };
        return { access_token: this.jwtService.sign(payload) };
      }


      async register(user: registerDTO): Promise<AccessToken> {
        const existingUser = this.usersService.getUserByEmail(user.email);
        if (existingUser) {
          throw new BadRequestException('email already exists');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
    
       const newUser =  await this.usersService.create({...user, password:hashedPassword});
        return this.login(newUser);
      }

}
