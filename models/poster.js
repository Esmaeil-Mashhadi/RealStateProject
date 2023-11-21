const { Schema, models, model, default: mongoose } = require("mongoose");

const posterSchema = new Schema({
    title :{
        type:String,
        required:true,

    },
    description :{
        type:String,
        required :true, 
    },
    location:{
        type:String,
        required:true,
    },
    phone:{
        type:String, 
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },

    realState:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum:["villa" ,"apartment" , "store" , "office"]
    },

    amenities:{
        type:[String],
        default:[]  
    },

    rules :{
        type:[String],
        default:[]
    },
    constructionDate :{
        type:Date,
        required:true,
    }, 

    userID:{
        type: mongoose.Types.ObjectId,
        ref:"homeUser",
        default:""
    },

    published:{
        type:Boolean,
        default:false,
    }
    
}, {timestamps:true})


const posterModel = models.userPosters ||  model("userPosters" , posterSchema)

export default posterModel