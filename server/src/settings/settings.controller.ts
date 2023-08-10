import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SettingsUpdateDTO } from './dto/update.dto';
import { SettingsService } from './settings.service';

@ApiTags('Settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: SettingsUpdateDTO) {
    const settings = await this.settingsService.update(id, body);

    return settings;
  }
}
