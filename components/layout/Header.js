"use client"
//icons
import {RxDashboard} from 'react-icons/rx'
import {FiLogIn} from 'react-icons/fi'
import styles from './Header.module.css'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Header = () => {
    const {data} = useSession()
    return (
        <header className={styles.header}>

           {!data?<div className={styles.login}>
            
            <Link href="/signup">
                <span>Login</span><FiLogIn/>
            </Link>
            </div> :
            <Link href="/dashboard" className={styles.dashboard}>
                Dashboard <RxDashboard/>
            </Link>
            }
            <div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/buy-residential">Buy residentials</Link>
                    </li>
                     
                </ul>
            </div>

        </header>
    );
};

export default Header;