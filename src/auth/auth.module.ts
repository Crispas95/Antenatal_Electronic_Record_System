import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './strategy/constants';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './strategy/local.strategy';
import { HashService } from 'src/users/hash.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }]),
JwtModule.register({
  secret: jwtConstants.secrete,
  signOptions: {
    expiresIn: '60d'
  }
})],

  controllers: [AuthController],
  providers: [AuthService,UsersService,LocalStrategy,HashService]
})
export class AuthModule {}
