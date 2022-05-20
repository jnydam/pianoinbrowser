import React from 'react';
import KeyboardGUI from '../KeyboardGUI/KeyboardGUI';

import styles from './MainLayoutComp.module.css';

const MainLayoutComp = (props) => {

    return (<div class={styles.mainLayoutCompContainer}>
        <div class={styles.outerControlBarHeaderContainer}>

        </div>
        <div class={styles.mainKeyboardContainer}>
            <KeyboardGUI></KeyboardGUI>
        </div>
    </div>)
}

export default MainLayoutComp;