"use client"
import { signOut } from 'next-auth/react';
import styles from './LogoutButton.module.css'
import {FiLogOut} from 'react-icons/fi'
const LogoutButton = () => {
    return (
        <button className={styles.button} onClick={signOut}>
            Log out <FiLogOut/>
        </button>
    );
};

export default LogoutButton;