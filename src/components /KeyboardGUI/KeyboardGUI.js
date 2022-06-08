import React from 'react';

import styles from './KeyboardGUI.module.css';

import * as Tone from 'tone';

import { whiteKeyIndexSoundMapping } from '../../util/SoundIndexMappings';


const KeyboardGUI = (props) => {

    const whiteKeyArrayCount = [...Array(16).keys()];

    const handleWhiteKeyPress = (event, whiteKeyNum) => {

        console.log("You are pressing on a keyboard");
        console.log(whiteKeyNum);

        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        synth.triggerAttackRelease(whiteKeyIndexSoundMapping[whiteKeyNum], "8n", Tone.context.currentTime);

    }

    return (<div className={styles.keyboardGuiContainerComp}>
        {whiteKeyArrayCount.map((whiteKeyNum, index) => (
            <div
                onClick={(event) => handleWhiteKeyPress(event, whiteKeyNum)} 
                key={index}
                className={styles.whiteKeyElement}></div>
        ))}
    </div>)
}

export default KeyboardGUI;