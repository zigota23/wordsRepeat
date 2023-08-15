import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenAuthDTO } from '../dto/token.dto';

export const GetUserAuth = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user as TokenAuthDTO;

    return user;
  },
);
