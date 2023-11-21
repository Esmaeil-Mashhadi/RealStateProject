import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import userModel from "@/models/user";
import posterModel from "@/models/poster";


export const metadata = {
    title: 'Dashboard',
    description: 'Buy and Sell Properties',
  
  }

const DashLayout = async ({children}) => {
    const session = await getServerSession(authOptions)
   
   if(!session)redirect("/login")

   await connectDB()
   const user = await userModel.findOne({email : session.user.email})
   if(!user){
    return <h3>Unauthorized action</h3>
   }

   const dbPosters = await posterModel.find({published:false})
    
   const posters = JSON.parse(JSON.stringify(dbPosters)) 

    return (
        <DashboardSidebar role={user.role} email={user.email} awaitNumber={posters?.length}>
         {children} 
        </DashboardSidebar>
    );
};

export default DashLayout;