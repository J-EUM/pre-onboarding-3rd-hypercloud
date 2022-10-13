import {
  Controller,
  Post,
  Body,
  Patch,
  Headers,
  NotAcceptableException,
  HttpCode,
  ForbiddenException,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('/signup')
  @HttpCode(201)
  async signup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<void> {
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return await this.usersService.signup(name, email, hashedPassword);
  }

  @Post('/login')
  @HttpCode(200)
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<object> {
    const existUser = await this.usersService.existUser(email);
    console.log(existUser[0]);
    if (existUser[0]) {
      if (bcrypt.compareSync(password, existUser[0].password)) {
        const token = jwt.sign(
          { id: existUser[0].id },
          process.env.SECRET_KEY,
          {
            expiresIn: '1d',
          },
        );
        const userDto = { id: existUser[0].id, token: token };
        return userDto;
      } else {
        throw new NotAcceptableException();
      }
    } else {
      throw new ForbiddenException();
    }
  }

  @Patch('/changepassword')
  @HttpCode(200)
  async changePassword(
    @Headers('token') token: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<void> {
    const userId = jwt.verify(token, process.env.SECRET_KEY);
    if (!userId) {
      throw new NotAcceptableException();
    }
    console.log('userId', userId['id']);
    const existUserId = await this.usersService.correctUser(
      userId['id'],
      email,
    );
    console.log('existUserid', existUserId[0].EXISTSUSER);

    if (existUserId[0].EXISTSUSER === '1') {
      const salt = await bcrypt.genSalt(11);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.usersService.changePassword(userId['id'], hashedPassword);
    } else {
      throw new NotAcceptableException();
    }
  }

  @Post('/follow')
  @HttpCode(200)
  async follow(
    @Headers('token') token: string,
    @Body('email') email: string
  ): Promise <any> {
    const payload = jwt.verify(token, process.env.SECRET_KEY); 
    const follower = payload['id'];
    const following = email
    
    await this.usersService.createFollow(follower, following)
  }

  @Delete('/unfollow')
  @HttpCode(200)
  async unfollow(
    @Headers('token') token: string,
    @Body('email') email: string
  ): Promise <any> {
    const payload = jwt.verify(token, process.env.SECRET_KEY); 
    const follower = payload['id'];
    const following = email
    
    await this.usersService.deleteFollow(follower, following)
  }
}
