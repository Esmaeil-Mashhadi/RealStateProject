const { default: mongoose } = require("mongoose");

async function connectDB (){
    if(mongoose.connections[0].readyState){return}
    mongoose.set("strictQuery" , false)
    await mongoose.connect(process.env.TEST_URI);
    console.log("Connected to DB");
}



export default connectDB