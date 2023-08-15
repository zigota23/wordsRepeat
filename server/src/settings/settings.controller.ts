import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserAuth } from 'src/auth/decorators/getUserId';
import { SettingsUpdateDTO } from './dto/update.dto';
import { SettingsService } from './settings.service';

@ApiTags('Settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: SettingsUpdateDTO,
    @GetUserAuth() userId: string,
  ) {
    console.log(userId);
    const settings = await this.settingsService.update(id, body);
    return settings;
  }
}
