import posterModel from "@/models/poster";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function DELETE(req , context){
 try {
    await connectDB()
    const id = context.params.posterID
    const result = await posterModel.deleteOne({_id :id})
    if(result.deletedCount){
        return NextResponse.json({
            statusCode : 200 , 
                message:"add removed successfully"
        })

    }

 } catch (error) {
    console.log(error);
 }
}

