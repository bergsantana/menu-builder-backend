import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from 'src/models/menu/menu.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  
  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() menu: Menu) {
    return this.menuService.create(menu);
  }

  @UseGuards(AuthGuard)
  @Get('findallbyuser/:id')
  findAllByUser(@Param('id') id: string) {
    return this.menuService.findAllByUser(id);
  }

  @Get('/:id')
  findone(@Param('id') id: string) {
    return this.menuService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenu: Menu) {
    return this.menuService.update(id, updateMenu);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
