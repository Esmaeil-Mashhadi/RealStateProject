import styles from './Card.module.css'
import { sp } from '@/utils/helperFunctions'
import Link from 'next/link'
//icons
import {RiHome3Line} from 'react-icons/ri'
import {MdApartment} from 'react-icons/md'
import {BiStore} from 'react-icons/bi'
import{GiOfficeChair} from 'react-icons/gi'
import {GrMapLocation} from 'react-icons/gr'
import {BiRightArrowAlt} from 'react-icons/bi'

const Card = ({data : {category , title , location , price , _id} }) => {

     
    const icons = {
        villa : <RiHome3Line/>,
        apartment : <MdApartment/>,
        store : <BiStore/>,
        office : <GiOfficeChair/>
    }
    return (
        <div className={styles.container}>

            <p className={styles.title}>{title}{icons[category]}</p>
            <p className={styles.location}>

                {location}<GrMapLocation/>
            </p>
            <span>price: {sp(price)} $</span>
            <Link href={`/buy-residential/${_id}`}>Watch Ad <BiRightArrowAlt/></Link>

        </div>
    );
};

export default Card;