import React from 'react';
import {GetLang} from '../../data/localization/localization';
import styles from './Partners.module.scss';
import {logos} from './partnerLogos'

export const Partners = () => {
    const localization = GetLang('ru');
    const partners = localization.partners;

    return (
        <React.Fragment>
            <section className={styles.wrapper}>
                <h3 className={styles.title}>{partners.title}</h3>
                <div className={styles.logos}>
                    {logos.map(logo => (
                        <img className={styles.image} src={logo.url} alt={logo.name} />
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}