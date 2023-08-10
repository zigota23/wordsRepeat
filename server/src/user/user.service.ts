import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { SettingsService } from 'src/settings/settings.service';
import { UserCreateDTO } from './dto/create.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    private readonly settingsService: SettingsService,
  ) {}

  async getById(id: string) {
    const user = await this.userRepository.findByPk(id, {
      include: { all: true },
    });

    return user;
  }

  async create(data: UserCreateDTO) {
    const user = await this.userRepository.create(data);
    await this.settingsService.create(user.id);

    return user.id;
  }

  async getUserByEmailOrUserName(value: string) {
    const user = await this.userRepository.findOne({
      where: {
        [Op.or]: [{ userName: value }, { email: value }],
      },
      include: { all: true },
    });

    return user;
  }
}
