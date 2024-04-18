import { Connection } from "mongoose";
import { menuSchema } from "./menu.schema";

export const menuProviders = [
    {
        provide: 'MENU_MODEL',
        useFactory: (connection: Connection) => connection.model('Menu', menuSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];