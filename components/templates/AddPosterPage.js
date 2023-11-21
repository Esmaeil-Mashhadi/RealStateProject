"use client"
import { useEffect, useState } from 'react';
import styles from './addPosterPage.module.css'
import TextInput from '../modules/TextInput';
import RadioList from '../modules/RadioList';
import TextList from '../modules/TextList';
import CustomDatepicker from '../modules/CustomDatepicker';
import { Toaster, toast } from 'react-hot-toast';

//icon
import {MdAddHomeWork} from 'react-icons/md'
import { ThreeDots } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';

const AddPosterPage = ({data}) => {
   
    const [addData , setAddData] = useState({
        title:"",
        description:"",
        location:"",
        phone:"",
        price:"",
        realState:"",
        constructionDate :new Date(),
        category:"",
        rules:[],
        amenities:[]
    })

    const [loading , setLoading] = useState(false)
    const router = useRouter()
    
    const submitHandler = async ()=>{
        setLoading(true)
        const res = await fetch("/api/poster" , {
            method :"POST" , body : JSON.stringify(addData) , headers :{"Content-Type" :"application/json"}
        })
        const data =await res.json()
        setLoading(false)
        if(data.error){
            toast.error(data.error)
        } else{
            toast.success(data.message)
            setAddData({
                title:"",
                description:"",
                location:"",
                phone:"",
                price:"",
                realState:"",
                constructionDate:new Date(),
                category:"",
                rules:[],
                amenities:[]
            })
        }
        router.refresh()
    }
  

    
    const editHandler = async ()=>{
        setLoading(true)
        const res = await fetch("/api/poster" ,{
            method :"PATCH" , body :JSON.stringify(addData) , headers :{"Content-Type" : "application/json"}
        })

        const data = await res.json() 
        setLoading(false)
        if(data.error){
            toast.error(data.error)
        } else {
            toast.success(data.message)
            router.refresh()
            setTimeout(() => {
                router.push("/dashboard/my-posters")
            }, 2000);
        }
    }

     useEffect(()=>{
       if(data){
        setAddData(data)
       }
     },[])

    

    return (
        <div className={styles.container}>
            <h3>{data ? "edit your Ad" : "Register your Add"}</h3>

            <TextInput title="Ad title" name="title" addData={addData} setAddData={setAddData} />
            <TextInput title="description" name="description" textarea={true} addData={addData} setAddData={setAddData} />
            <TextInput title="location" name="location"  addData={addData} setAddData={setAddData} />
            <TextInput title="phone" name="phone"  addData={addData} setAddData={setAddData} />
            <TextInput title="price($)" name="price"  addData={addData} setAddData={setAddData} />
            <TextInput title="realState" name="realState"  addData={addData} setAddData={setAddData} />
            <RadioList addData={addData} setAddData={setAddData}/>
            <TextList title="welfare amenities" addData={addData} setAddData={setAddData} type="amenities" />
            <TextList title="rules" addData={addData} setAddData={setAddData} type="rules" />

            <CustomDatepicker addData={addData} setAddData={setAddData}/>
            <Toaster toastOptions={{success:{duration:5000}}}/>
       
             {loading ? <ThreeDots wrapperStyle={{margin:"auto"}}/> :  <button className={styles.submit} onClick={data ? editHandler : submitHandler} ><MdAddHomeWork/>{data? "Edit":"Submit"} </button>}
           
        </div>


    ); 
};

export default AddPosterPage;