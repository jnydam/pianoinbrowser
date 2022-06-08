import React from 'react';

import styles from './BlackKeyElementComp.module.css';

const BlackKeyElementComp = (props) => {

    return (<div 
        onClick={() => props.onBlackKeyPress(props.keyId)}
        className={styles.blackKeyElementCompContainer}>
    </div>)
}

export default BlackKeyElementComp;