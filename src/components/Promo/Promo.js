import React from 'react';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import {Partners} from '../Partners/Partners';
import {Features} from "../Features/Features";

import styles from './Promo.module.scss';

export const Promo = () => {
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

    return (
        <React.Fragment>
            <Header setInnerWidth={setInnerWidth}/>
            <main className={styles.root}>
                <Features innerWidth={innerWidth}/>
                <Partners />
            </main>
            <Footer />
        </React.Fragment>
    )
}