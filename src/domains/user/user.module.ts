import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { usersProviders } from 'src/models/user/user.providers';

@Module({    
    imports:[DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...usersProviders]
})
export class UserModule {
}
