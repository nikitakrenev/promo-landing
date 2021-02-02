import React from 'react';
import styles from './Features.module.scss';

export const Option = ({url, text}) => {
    return (
        <div className={styles.option}>
            <img className={styles.img} src={url} alt="icon"/>
            <span className={styles.text}>{text}</span>
        </div>
    )
}