import * as mongoose from "mongoose" 
import {itemSchema} from "../item/item.schema";
 
 
 

export const menuSchema = new mongoose.Schema({
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    menutitle: {type: String, required: true},
     
    items: {type: [itemSchema]}
})

export type Menu = mongoose.InferSchemaType<typeof menuSchema>;


//export default mongoose.model<Menu>("Menu", menuSchema)    
 