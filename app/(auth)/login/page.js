import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginPage from "@/components/templates/Login";

const Login = async() => {
        const session = await getServerSession(authOptions)
        if(session){
            redirect("/")
        }
    return (
            <LoginPage/>
    );
};

export default Login;