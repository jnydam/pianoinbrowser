import React from 'react';

import styles from './KeyboardGUI.module.css';

import * as Tone from 'tone';

import { whiteKeyIndexSoundMapping } from '../../util/SoundIndexMappings';
import BlackKeyElementOverlayContainer from './BlackKeyElementOverlayContainer/BlackKeyElementOverlayContainer';


const KeyboardGUI = (props) => {

    const whiteKeyArrayCount = [...Array(16).keys()];

    const handleWhiteKeyPress = (event, whiteKeyNum) => {

        const synth = new Tone.Synth().toDestination();

        synth.triggerAttackRelease(whiteKeyIndexSoundMapping[whiteKeyNum], "8n", Tone.context.currentTime);

    }

    return (<div className={styles.keyboardGuiContainerComp}>
        {whiteKeyArrayCount.map((whiteKeyNum, index) => (
            <div
                onClick={(event) => handleWhiteKeyPress(event, whiteKeyNum)} 
                key={index}
                className={styles.whiteKeyElement}></div>
        ))}
        <BlackKeyElementOverlayContainer></BlackKeyElementOverlayContainer>
    </div>)
}

export default KeyboardGUI;