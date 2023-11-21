import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MyPostersPage from '@/components/templates/MyPostersPage';
import userModel from '@/models/user';
import connectDB from '@/utils/connectDB';
import { objectCopy } from '@/utils/helperFunctions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import React from 'react';

const myPosters = async() => {
    await connectDB()
    const session = await getServerSession(authOptions)
     if(!session) redirect('/login')
     const [user] = await userModel.aggregate([
        {$match : {email: session.user.email}},
        {$lookup : {
            from :'userposters',
            localField:"_id",
            foreignField:'userID',
            as: 'posters'
        }}
    ])

    const posters = objectCopy(user.posters)

    return (
        <div>
            <MyPostersPage posters={posters} />
        </div>
    );
};

export default myPosters;