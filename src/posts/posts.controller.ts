import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from "@nestjs/common";
import { PostService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostService) {}

    @Post('/:id/like')
    async likePost(
        @Body('userId') userId: number,
        @Param('id', ParseIntPipe) postId: number): Promise<any> {
        await this.postService.likePost(userId, postId);

        return Object.assign({message: "SUCCESS"})
    }

    @Post('/:id/comment')
    async createComment(
        @Body('userId') userId: number,
        @Param('id', ParseIntPipe) postId: number,
        @Body('text') text: string
    ): Promise<any> {
        await this.postService.createComment(userId, postId, text)

        return Object.assign({message: "SUCCESS"})
    }
}