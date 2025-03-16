import { Schema, model, models } from "mongoose"

const storeSchema= new Schema({
    item:{type:String,required:true},
    price:{type:Number,required:true},
    brand:{type:String,required:true},
    gender:{type:String,required:true},
},
   { timestamps: true, collection:"products"}
);

const RS= models.RS || model("RS",storeSchema);

export default RS;