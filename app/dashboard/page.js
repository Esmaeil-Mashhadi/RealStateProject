import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import userModel from "@/models/user";
import DashboardPage from "@/components/templates/DashboardPage";

const DashBoard = async () => {

    await connectDB()
    const session = await getServerSession(authOptions)
    const user = await userModel.findOne({email: session.user.email})

    return (
        <div>
           <DashboardPage createdAt={user.createdAt}/>
        </div>
    );
};

export default DashBoard;