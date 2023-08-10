import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SettingsUpdateDTO } from './dto/update.dto';
import { Settings } from './settings.model';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Settings) private readonly settingsRepository: typeof Settings,
  ) {}

  async create(userId: string) {
    const settings = await this.settingsRepository.create({ userId });

    return settings;
  }

  async update(id: string, data: SettingsUpdateDTO) {
    const settings = await this.settingsRepository.findByPk(id);

    const updated = await settings.update(data);

    return updated;
  }
}
