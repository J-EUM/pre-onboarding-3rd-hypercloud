import { Injectable } from "@nestjs/common";
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PostService {
    constructor(@InjectDataSource() private readonly connection: DataSource) {}

    async getReaction(): Promise<any> {
        return this.connection.query('SELECT * FROM reactions;');
    }

}

