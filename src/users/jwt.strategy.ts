import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectDataSource() private readonly connection: DataSource) {
    super({
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload) {
    const { id } = payload;
    const user: Promise<object> = await this.connection.query(
      `SELECT * FROM users WHERE id = ?;`,
      [id],
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
