import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor( private userService: UserService) {
    super({
        usernameField: 'email',
      });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.validateUser(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}