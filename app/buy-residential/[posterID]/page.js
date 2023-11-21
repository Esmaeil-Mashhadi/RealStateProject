import connectDB from '@/utils/connectDB';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import userModel from '@/models/user';
import DetailsPage from '@/components/templates/DetailsPage';
import posterModel from '@/models/poster';

const PorilfeDetail = async({params :{posterID}}) => {

    console.log(posterID);
     await connectDB();
     const poster = await posterModel.findOne({_id :posterID})
 
        if(!poster){
            <h1>Something went wrong</h1>
        }

     const session = await getServerSession(authOptions)


     const user = await userModel.findOne({email : session?.user.email}) 
   
    return (
        <div>
            <DetailsPage data={poster} role= {user?.role} id={posterID}/>
        </div>
    );
};

export default PorilfeDetail;

export const generateMetadata = async({params:{posterID}})=>{
    await connectDB()
    const poster = await posterModel.findOne({_id : posterID})
    return{
        title:poster.title , description:poster.description
    }
}