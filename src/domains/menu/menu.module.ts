import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { menuProviders } from 'src/models/menu/menu.provider';

@Module({
  imports: [DatabaseModule, ],
  controllers: [MenuController],
  providers: [MenuService, ...menuProviders],
})
export class MenuModule {}
