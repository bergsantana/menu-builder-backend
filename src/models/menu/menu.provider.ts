import { Connection } from "mongoose";
import { MenuSchema } from "./menu.schema";

export const menuProviders = [
    {
        provide: 'MENU_MODEL',
        useFactory: (connection: Connection) => connection.model('Menu', MenuSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];