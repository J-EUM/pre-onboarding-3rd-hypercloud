import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { PostService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostService) {}

    // 지우고 작성하세요
    @Get('test')
    getReaction(): Promise<any> {
        return this.postService.getReaction();
    }

    @Post('/like')
    likePost(
        @Body('userId') userId: number,
        @Body('postId') postId: number): void {
        this.postService.likePost(userId, postId);

        return Object.assign({message: "SUCCESS"})
    }
}