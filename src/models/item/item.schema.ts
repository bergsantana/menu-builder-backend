 import * as mongoose from 'mongoose'

 
export const itemSchema =  new mongoose.Schema({
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
    seq: { type: Number, required: true},
    itemTitle: {type: String, required: true},
    itemDescription: {type: String, required: true},
    photoUrl: {type: String, required: true},
    price: {type: String, required: true},
    disabled: {type: Boolean, required: true}
})


type Item = mongoose.InferSchemaType<typeof itemSchema>;

export default mongoose.model<Item>("Item", itemSchema) 
