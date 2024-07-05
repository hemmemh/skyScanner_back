
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { secret } from '../lib/jwt';
import { UserService } from 'src/user/user.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        usernameField: 'email',
        secretOrKey: secret,
      });
  }

  async validate(payload:any): Promise<any> {
    const user = await this.userService.validateUser(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}