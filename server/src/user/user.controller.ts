import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserCreateDTO } from './dto/create.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ type: User })
  @Post('')
  async create(@Body() body: UserCreateDTO) {
    const user = this.userService.create(body);
    return user;
  }
}
