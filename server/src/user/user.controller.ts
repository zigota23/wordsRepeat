import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getById(@Param('id') id: string) {
    console.log(id);
    const user = await this.userService.getById(id);
    return user;
  }

  // @ApiResponse({ type: User })
  // @Post('')
  // async create(@Body() body: UserCreateDTO) {
  //   const user = this.userService.create(body);
  //   return user;
  // }
}
