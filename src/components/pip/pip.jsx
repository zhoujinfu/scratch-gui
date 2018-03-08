import React from 'react';
import styles from './pip.css';

import pipIcon from './pip.gif';

const Pip = props => (
    <div className={styles.ringContainer}>
        <div className={styles.ring}></div>
        <div className={styles.circle}></div>
    </div>
);

export default Pip;
