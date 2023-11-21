"use client"

import { useEffect, useState } from "react";
import styles from './Login.module.css'
import Link from "next/link";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import Notification from "../modules/Notfication";


const LoginPage = () => {
    const [data , setData] = useState({
        email:"",
        password:"",
    })


    const [notMessage , SetNotMessage] = useState({})
    const [welcome , setWelcome] = useState(false)

    const router = useRouter()
    const {email ,password } = data
    const truthyMessage  = notMessage.error
    
    const changeHandler= (e)=>{
        const {name , value}  = e.target
        setData({
            ...data ,
            [name] : value
        })
    
    }

    const loginHandler = async(e)=>{
        e.preventDefault()
        const res = await signIn("credentials" , {
            email , password , redirect:false
        })
        if(!res.error){
            setWelcome(true)
            setTimeout(() => {
               router.push("/")
            }, 3000);
        }
        SetNotMessage(res)
        setTimeout(() => {
            SetNotMessage("")
        }, 3000);
    }

    useEffect(()=>{
        setWelcome(false)
    },[])
    return (
        <>
        <div className={styles.formInput}>
            <h4>Register Form</h4>
              <form className={styles.formContainer}>
                <div >
                    <input type="text" name="email" value={email} onChange={changeHandler} />
                  <label>Email</label>
                </div>

                <div>
                    <input type="text" name="password" value={password} onChange={changeHandler} />
                  <label>password</label>
                </div>

                <button onClick={loginHandler}>Login</button>
                  
               </form>

               <div className={styles.already}>
               dont have an account?  <Link href="signup"> Sign up</Link>
            </div> 
            
        </div>
        
        {truthyMessage &&  <Notification message={notMessage} /> }
        {!truthyMessage && welcome && <Notification message ={notMessage} />}
        </>
    );
};

export default LoginPage;