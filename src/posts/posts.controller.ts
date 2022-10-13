import { Controller, Get } from "@nestjs/common";
import { PostService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostService) {}

    @Get('test')
    getReaction(): Promise<any> {
        return this.postService.getReaction();
    }
}