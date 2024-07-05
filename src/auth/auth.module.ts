import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FlightModule } from 'src/flight/flight.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategies';
import { JwtStrategy } from './strategies/jwt.strategies';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { secret } from './lib/jwt';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
    }),
    UserModule,

    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [],
  exports: [AuthService, JwtModule],
})
export class AuthModule {

}
