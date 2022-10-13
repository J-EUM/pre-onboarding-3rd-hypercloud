import { Headers, Body, Controller, Get, Param, ParseIntPipe, Post, Res, NotAcceptableException } from "@nestjs/common";
import { PostService } from "./posts.service";
import * as jwt from 'jsonwebtoken';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostService) {}

    @Post('/:id/like')
    async likePost(
        @Headers('token') token: string,
        @Param('id', ParseIntPipe) postId: number): Promise<any> {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        const userId = payload["id"];
        if (!userId) {
            throw new NotAcceptableException();
        }
        await this.postService.likePost(userId, postId);

        return Object.assign({message: "SUCCESS"})
    }

    @Post('/:id/comment')
    async createComment(
        @Headers('token') token: string,
        @Param('id', ParseIntPipe) postId: number,
        @Body('text') text: string
    ): Promise<any> {

        const payload = jwt.verify(token, process.env.SECRET_KEY);
        const userId = payload["id"];
        if (!userId) {
            throw new NotAcceptableException();
        }
        await this.postService.createComment(userId, postId, text)

        return Object.assign({message: "SUCCESS"})
    }
}