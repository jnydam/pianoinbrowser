import React from 'react';

import styles from './KeyboardGUI.module.css';

import * as Tone from 'tone';

import { whiteKeyIndexSoundMapping } from '../../util/SoundIndexMappings';
import BlackKeyElementOverlayContainer from './BlackKeyElementOverlayContainer/BlackKeyElementOverlayContainer';


const KeyboardGUI = (props) => {

    const whiteKeyArrayCount = [...Array(16).keys()];

    const handleWhiteKeyPress = (event, whiteKeyNum) => {

        const synth = new Tone.Synth().toDestination();

        synth.envelope.attack = 0.4;
        synth.envelope.decay = 0.5;
        synth.envelope.sustain = 0.5;
        synth.envelope.release = 0.8;
        
        // new Tone.Envelope({
        //     attack: 0.1,
        //     decay: 0.2,
        //     sustain: 0.5,
        //     release: 0.8,
        // });
        
        synth.triggerAttackRelease(whiteKeyIndexSoundMapping[whiteKeyNum], "16n", Tone.context.currentTime);

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