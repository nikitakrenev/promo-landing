import React from 'react';
import styles from './ApplicationButton.module.scss';

export const ApplicationButton = ({title}) => {
    return (
        <button className={styles.button}>
            <span>{title}</span>
        </button>
    )
};