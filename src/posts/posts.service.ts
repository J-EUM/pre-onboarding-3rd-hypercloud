import { Injectable } from "@nestjs/common";
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PostService {
    constructor(@InjectDataSource() private readonly connection: DataSource) {}

    async getReaction(): Promise<any> {
        return this.connection.query('SELECT * FROM reactions;');
    }

    async likePost(userId: number, postId: number): Promise<void> {

        const isExist = await this.connection.query(
            `SELECT 1 FROM post_reaction 
            WHERE EXISTS (
                SELECT * FROM post_reaction 
                WHERE post_id = ? AND user_id = ?)
            ;`, [postId, userId]);

        if (isExist.length) {
            return await this.connection.query(
                `DELETE FROM post_reaction 
                WHERE post_id = ? AND user_id = ?
                ;`, [postId, userId]);
            
        }
                
        return await this.connection.query(
            `INSERT INTO post_reaction
            (post_id, user_id, reaction_id)
            VALUES (?, ?, 1)
            ;`, [postId, userId]);
    }
            
}

