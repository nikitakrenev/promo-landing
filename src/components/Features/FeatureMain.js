import React from 'react';
import {Option} from "./Option";
import {
    OPTION_MAX_TOP_MARGIN,
    OPTION_MIN_TOP_MARGIN,
    gridRowsMin,
    gridRowsMax,
    gridRowsMed,
    HEADER_INNER_WIDTH_MEDIUM, HEADER_INNER_WIDTH_MIN
} from "./sizeConstants";

import styles from './Features.module.scss';

export const FeatureMain = ({textBefore, textAfter, options, index, innerWidth}) => {
    const optionsMarginTop = textBefore ? OPTION_MIN_TOP_MARGIN : OPTION_MAX_TOP_MARGIN;
    const gridRows = (innerWidth < HEADER_INNER_WIDTH_MEDIUM) ? (innerWidth < HEADER_INNER_WIDTH_MIN) ? gridRowsMin : gridRowsMed : gridRowsMax;

    return (
        <div className={styles.featureMain}>
            {textBefore && <span className={styles.subTitle}>{textBefore}</span>}
            <div className={styles.options} style={{marginTop: optionsMarginTop, msGridRows: gridRows[index]}}>
                {options.map((option) => (
                    <Option url={option.url} text={option.text} />
                ))}
            </div>
            {textAfter && <span className={styles.subTitle}>{textAfter}</span>}
        </div>
    )
}