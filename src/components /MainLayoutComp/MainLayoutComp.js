import React from 'react';
import KeyboardGUI from '../KeyboardGUI/KeyboardGUI';

import styles from './MainLayoutComp.module.css';

const MainLayoutComp = (props) => {

    return (<div className={styles.mainLayoutCompContainer}>
        <div className={styles.outerControlBarHeaderContainer}>

        </div>
        <div className={styles.mainKeyboardContainer}>
            <KeyboardGUI></KeyboardGUI>
        </div>
    </div>)
}

export default MainLayoutComp;