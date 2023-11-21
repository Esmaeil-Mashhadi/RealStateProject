import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import posterModel from "@/models/poster";
import userModel from "@/models/user";
import { objectCopy } from "@/utils/helperFunctions";
import AdminPage from "@/components/templates/AdminPage";

const Admin = async() => {
    await connectDB()
    const session =  await getServerSession(authOptions)
    if(!session){
        redirect("/login")
    }

    const user = await userModel.findOne({email : session.user.email})
    if(user.role!=="Admin"){
        redirect("/dashboard")
    }

    const data = await posterModel.find({published:false})
    
    const posters  = objectCopy(data)
    
    return (
        <div>
           <DashboardSidebar role={user.role} email={user.email} awaitNumber ={posters?.length}>
                <AdminPage posters = {posters}/>
           </DashboardSidebar>
        </div>
    );
};

export default Admin;