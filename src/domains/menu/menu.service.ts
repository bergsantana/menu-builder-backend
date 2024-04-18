import { Inject, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Model } from 'mongoose';
import { Menu } from 'src/models/menu/menu.schema';

@Injectable()
export class MenuService {

  constructor(
    @Inject('MENU_MODEL')
    private menuModel: Model<Menu>
  ){}

  async create(menu: Menu) {
    const createdMenu = new this.menuModel(menu) ;
    return await createdMenu.save()
  }

  async findAll() {
    return await this.menuModel.find().exec();
  }

  async findOne(id: string) {
    return await this.menuModel.findById(id).exec();
  }

  async update(id: string, updateMenu: Menu) {
    const updatedMenuu = await  this.menuModel.updateOne(
    {_id: id}, 
    {menutitle: updateMenu.menutitle, items: updateMenu.items}
    )
    return updatedMenuu
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
