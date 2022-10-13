import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from "@nestjs/common";
import { PostService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostService) {}

    @Post('/:id/like')
    likePost(
        @Body('userId', ParseIntPipe) userId: number,
        @Param('id', ParseIntPipe) postId: number): void {
        this.postService.likePost(userId, postId);

        return Object.assign({message: "SUCCESS"})
    }

    @Post('/:id/comment')
    createComment(
        @Body('userId') userId: number,
        @Param('id') postId: number,
        @Body('text') text: string
    ): void {
        this.postService.createComment(userId, postId, text)
    }
}