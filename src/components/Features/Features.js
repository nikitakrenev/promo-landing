import React from 'react';

import {GetLang} from '../../data/localization/localization';
import {FeatureHeader} from './FeatureHeader';
import {FeatureMain} from "./FeatureMain";

import styles from './Features.module.scss'

export const Features = ({innerWidth}) => {
    const localization = GetLang('ru');
    const features = localization.features;

    return (
        <React.Fragment>
            {features.map((feature) => (
                <section className={styles.section}>
                    <div className={styles.wrapper}>
                        <FeatureHeader
                            title={feature.title}
                            description={feature.description}
                            list={feature.list}
                            url={feature.url}
                            name={feature.name}
                        />
                        {feature.parts.map((part) => (
                            <FeatureMain
                                index={part.index}
                                textBefore={part.textBefore}
                                textAfter={part.textAfter}
                                options={part.options}
                                innerWidth={innerWidth}
                            />
                        ))}
                        <hr className={styles.line} />
                    </div>
                </section>
            ))}
        </React.Fragment>
    )
}