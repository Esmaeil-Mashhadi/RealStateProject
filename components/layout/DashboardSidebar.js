import styles from './DashboardSidebar.module.css'
import Link from 'next/link';

//icons
import {MdManageAccounts} from 'react-icons/md'
import { ImProfile } from "react-icons/im";
import {FcAdvertising} from 'react-icons/fc'
import {MdPostAdd} from 'react-icons/md'
import {HiMiniExclamationTriangle} from 'react-icons/hi2'
import LogoutButton from '../buttons/LogoutButton';


const DashboardSidebar = async ({children , email , role , awaitNumber}) => {
    
    return (
        <div className={styles.container}>

            <div className={styles.sidebar}>
                    <div className={styles.adds}>
                    <ImProfile/>
                   {role === "Admin" ? <p>Admin</p> : null} </div>
     
                    <p>{email}</p>
                 <span></span>
                    <Link href="/dashboard">Account <MdManageAccounts/></Link>
                    <Link href="/dashboard/my-posters">My ads <FcAdvertising/> </Link>
                    <Link href="/dashboard/addPoster">Register an ad <MdPostAdd/> </Link>
                    {role === "Admin" ? <Link className={styles.confirm} href="/admin">
                     Awaiting confirmation {awaitNumber !=0 && <div> <HiMiniExclamationTriangle/><p>{awaitNumber}</p></div>}
                     </Link> :null}
                    <LogoutButton/>
            </div>

              <div className={styles.main}>
                    {children}
            </div>
            
        </div>
    );
};

export default DashboardSidebar;