import React from 'react';
import {GetLang} from '../../data/localization/localization';
import styles from './Footer.module.scss';

export const Footer = () => {
    const localization = GetLang('ru');
    const footer = localization.footer;

    return (
        <React.Fragment>
            <footer className={styles.footer}>
                <h3 className={styles.title}>{footer.title}</h3>
                <span className={styles.subtitle}>
                    {footer.subTitle} <a className={styles.link} href="mailto:srp@support.moneta.ru" target="_blank" rel="noopener noreferrer">srp@support.moneta.ru</a>
                </span>
            </footer>
        </React.Fragment>
    )
}