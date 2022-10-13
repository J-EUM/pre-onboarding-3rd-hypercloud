import { Injectable } from '@nestjs/common';
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
}
