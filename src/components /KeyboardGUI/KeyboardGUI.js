import React from 'react';

import styles from './KeyboardGUI.module.css';

const KeyboardGUI = (props) => {

    return (<div className={styles.keyboardGuiContainerComp}>
        <div className={styles.whiteKeyElement}></div>
        <div className={styles.whiteKeyElement}></div>
        <div className={styles.whiteKeyElement}></div>
        <div className={styles.whiteKeyElement}></div>
        <div className={styles.whiteKeyElement}></div>
        <div className={styles.whiteKeyElement}></div>
        <div className={styles.whiteKeyElement}></div>
        
    </div>)
}

export default KeyboardGUI;