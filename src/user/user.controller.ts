import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/schemas/User.schema';
import { UserService } from './user.service';
import { Public } from 'src/auth/guards/JwtGuard';

@Controller('user')
@Public()
export class UserController {

    constructor(private userService: UserService) {}

    @Post('registration')
    registration(@Body() dto: User) {
      return this.userService.register(dto);
    }


    @Post('login')
    login(@Body() dto: User) {
      return this.userService.login(dto);
    }
}
