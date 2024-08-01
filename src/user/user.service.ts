import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerDTO } from 'src/auth/DTO/registerDTO';
import { User } from 'src/schemas/User.schema';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { validate } from 'class-validator';
import { AccessToken } from 'src/auth/types/accessToken';
import { Response } from 'express';
@Injectable()
export class UserService {



    constructor(
        private jwtService: JwtService,
        @InjectRepository(User)
        private UserRepo: Repository<User>,
      ) {}

    getUserByEmail(email:string){
        return this.UserRepo.findOne({where:{email}})
    }


    async create(user:registerDTO){
         return  this.UserRepo.save(user)
    }

    async validateUser(email: string): Promise<User> {
        const user: User = await this.getUserByEmail(email);
        if (!user) {
          throw new BadRequestException('User not found');
        }

        return user;
      }




      async login(dto:User): Promise<AccessToken> {
        const user: User = await this.getUserByEmail(dto.email);
        if (!user) {
          throw new BadRequestException('User not found');
        }
        const isMatch: boolean = bcrypt.compareSync(dto.password, user.password);
        if (!isMatch) {
          throw new BadRequestException('Password does not match');
        }
        return this.verify(user)
      }



      async logout(res:any) {
        try {

          res.clearCookie('')
          return res.status(200).send({ message: 'Successfully logged out' });
        } catch (error) {
          throw new BadRequestException('User not found');
        }
   
      }

      async delete(id:string){
       try {
        return this.UserRepo.delete(id)
       } catch (error) {
        throw new BadRequestException('User not found');
       }
      }

      async verify(user: User): Promise<AccessToken> {
        const payload = { email: user.email, uid: user.uid};
        return { 
          access_token: this.jwtService.sign(payload),
          user

         };
      }



      async register(user: registerDTO): Promise<AccessToken> {
        const existingUser =await  this.getUserByEmail(user.email);
        if (existingUser) {
          throw new BadRequestException('email already exists');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);

       const newUser =  await this.create({...user, password:hashedPassword});
        return this.verify(newUser);
      }

      async getProfile(user:User){
        return this.validateUser(user.email)
      }

}
