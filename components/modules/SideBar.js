import Link from 'next/link';
import styles from './SideBar.module.css'


//icons
import {MdCategory} from 'react-icons/md'
import{DiGhostSmall} from 'react-icons/di'
import {RiHome3Line} from 'react-icons/ri'
import {MdApartment} from 'react-icons/md'
import {BiStore} from 'react-icons/bi'
import{GiOfficeChair} from 'react-icons/gi'
import Hambutton from '../buttons/Hambutton';

const SideBar = () => {

    const queries = [{villa:"Villa"}, {apartment:"Apartment"} ,{store:"Store"} , {office:"Office"}]
    const icons = {
        villa : <RiHome3Line/>,
        apartment : <MdApartment/>,
        store : <BiStore/>,
        office : <GiOfficeChair/>
    }
    return ( 
        <>
        <div className={styles.container}>
            <p>Category <MdCategory/></p>

            <div className={styles.categories}> 
            <Link  href="/buy-residential"><DiGhostSmall/>All </Link>
            {queries.map((item , index)=>(
                <Link key={index} href={{pathname:"/buy-residential" , query:{category: Object.keys(item)}} }> 
                 {icons[Object.keys(item)]}{Object.values(item)}
                </Link>
            ))}
            </div>

        </div>

        <div className={styles.HamContainer} >
         <Hambutton queries ={queries} icons ={icons}/>
        </div>
        </>
    );
};

export default SideBar;