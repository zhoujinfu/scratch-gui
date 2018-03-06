import React from 'react';
import styles from './pip.css';

import pipIcon from './pip.gif';

const Pip = props => (
    <img
        className={styles.rainbow}
        src={pipIcon}
    />
);

export default Pip;
