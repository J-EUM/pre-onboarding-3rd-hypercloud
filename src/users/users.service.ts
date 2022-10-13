import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectDataSource() private readonly connection: DataSource) {}

  async signup(
    name: string,
    email: string,
    hashedPassword: string,
  ): Promise<void> {
    return this.connection.query(
      `INSERT INTO users (name, email, password) VALUES (?,?,?)`,
      [name, email, hashedPassword],
    );
  }

  async existUser(email: string): Promise<object> {
    return this.connection.query(
      `
        SELECT id, name, email, password FROM users WHERE email = ?
      `,
      [email],
    );
  }

  async correctUser(userId: number, email: string): Promise<object> {
    return this.connection.query(
      `
        SELECT EXISTS (SELECT * FROM users WHERE id = ? AND email = ?) AS EXISTSUSER;
      `,
      [userId, email],
    );
  }

  async changePassword(userId: number, hashedPassword: string) {
    this.connection.query(
      `
        UPDATE users SET password = ? WHERE id = ?;
      `,
      [hashedPassword, userId],
    );
  }

  async createFollow(follower: number, following: string) {
    const [followingUser] = await this.connection.query(`
    SELECT id FROM users
    WHERE email = ?;`
    ,[following]
    )

    if (!followingUser) {
      throw new NotFoundException(`${following} does not exist`)
    }

    const followingUserExist = await this.connection.query(`
    SELECT followed_user_id FROM follow
    WHERE followed_user_id = ?;
    `, [followingUser['id']])

    if (followingUserExist.length) {
      throw new ConflictException(`Already follow user: ${following}`)
    }

    return await this.connection.query(`
    INSERT INTO follow
    (following_user_id, followed_user_id)
    VALUES(?,?);`,
    [follower,followingUser['id']])
  }

  async deleteFollow(follower: number, following: string) {
    const [followingUser] = await this.connection.query(`
    SELECT id FROM users
    WHERE email = ?;`
    ,[following]
    )

    if (!followingUser) {
      throw new NotFoundException(`${following} does not exist`)
    }

    const followingUserExist = await this.connection.query(`
    SELECT followed_user_id FROM follow
    WHERE followed_user_id = ?;
    `, [followingUser['id']])

    console.log('fue',followingUserExist)

    if (!followingUserExist.length) {
      throw new ConflictException(`you are not following: ${following}`)
    }

    return await this.connection.query(`
    DELETE FROM follow
    WHERE following_user_id = ${follower} AND followed_user_id = ${followingUser['id']}
    ;`)
  }
}
