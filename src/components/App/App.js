import React from 'react';
import {Promo} from '../Promo/Promo';
import styles from './App.module.scss'

export const App = () => {
    return (
        <div className={styles.root}>
            <Promo />
        </div>
    )
}