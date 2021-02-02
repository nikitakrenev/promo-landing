import React from 'react';

import {GetLang} from '../../data/localization/localization';
import {ApplicationButton} from '../ApplicationButton/ApplicationButton';

import {HEADER_IMAGE_LEFT_MARGIN, HEADER_IMAGE_RIGHT_MARGIN, HEADER_INNER_WIDTH} from "../Features/sizeConstants";

import styles from './Header.module.scss';

export const Header = ({setInnerWidth}) => {
    const localization = GetLang('ru');
    const header = localization.header;

    const getMargin = () => {
        const width = window.innerWidth;
        let margin;
        if (width > HEADER_INNER_WIDTH) {
            margin = (width - HEADER_INNER_WIDTH) / 2 + HEADER_IMAGE_RIGHT_MARGIN;
        } else {
            margin = width - HEADER_IMAGE_LEFT_MARGIN;
        }
        return (margin > 0) ? margin : 0;
    };

    const [imageRight, setImageRight] = React.useState(getMargin());

    window.onresize = function () {
        setInnerWidth(window.innerWidth);
        setImageRight(getMargin());
    }

    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>{header.title}</h1>
                    <span className={styles.subTitle}>{header.subTitle}</span>
                    <ApplicationButton title={header.applicationButton} />
                </div>
                <div className={styles.img} style={{right: imageRight}}>
                    <img src="img/header-image.png" alt="API solution" />
                </div>
            </header>
        </React.Fragment>
    )
}