import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SettingsModule } from 'src/settings/settings.module';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SettingsModule, SequelizeModule.forFeature([User])],
  exports: [UserService],
})
export class UserModule {}
