import React from 'react';
import styles from './Features.module.scss';

export const FeatureHeader = ({title, description, list, url, name}) => {

    return (
        <div className={styles.featureHeader}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subTitle}>{description}</p>
                {list && <p className={styles.list}>{list}</p>}
            </div>
            <img className={styles.img} src={url} alt={name} />
        </div>
    )
}