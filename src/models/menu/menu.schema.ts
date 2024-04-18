import * as mongoose from "mongoose"

export interface Menu {
    ownerId: String
    menutitle: String
    items : Item[]
}

export interface Item {
    id: Number
    seq: Number
    itemTitle: String
    itemDescription: String
    photoUrl: String
    price: String
    disabled: Boolean
}

export const MenuSchema = new mongoose.Schema({
    ownerId: String,
    menutitle: String,
    items: []
})