"use client"
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross2} from 'react-icons/rx'


import styles from './HamButton.module.css'
import { useEffect, useState } from "react";
import Link from 'next/link'

const Hambutton = ({queries, icons}) => {
    const [hamShow, setHamshow]= useState(false)
    const [n , setN]= useState(-150)
    const move  = {
        "--move": `${n}%`,
    }

    const showHandler = ()=>{
        setHamshow(!hamShow)
    }

    useEffect(()=>{
        hamShow ?setN(0):setN(-150)
    },[hamShow])

    return (
        <div className={styles.container}>
         <span onClick={showHandler}>{hamShow ? <RxCross2/> : <RxHamburgerMenu/>}</span>   
      
         <div style={move} className={styles.HamSideBar}> 
            {queries?.map((item , index) => (<Link key={index} onClick={()=>setHamshow(false)}  href={{pathname:"buy-residential" , query:{category:Object.keys(item)}}}>
                <p className={styles.Link}>{icons[Object.keys(item)]} : { Object.values(item)}</p></Link>))}

        </div>
        </div>
    );
};

export default Hambutton;