import React, { useEffect } from 'react';

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
        
        synth.triggerAttackRelease(whiteKeyIndexSoundMapping[whiteKeyNum], "16n", Tone.context.currentTime);

    }

    const whiteKeyElementNormalStyle = {
            display: 'flex',
            backgroundColor: 'white',
            height: '100%',
            flex: 2,
            borderRight: '1px solid black'
    };

    const whiteKeyElementPressedStyle = {
        display: 'flex',
        backgroundColor: '#f3f3f3',
        height: '100%',
        flex: 2,
        borderRight: '1px solid black'
    };

    console.log("This is the note selected");
    console.log(props.noteSelected);

    return (<div className={styles.keyboardGuiContainerComp}>
        {whiteKeyArrayCount.map((whiteKeyNum, index) => (
            <div
                onClick={(event) => handleWhiteKeyPress(event, whiteKeyNum)} 
                key={index}
                // className={styles.whiteKeyElement}
                style={
                    props.noteSelected !== undefined 
                    && whiteKeyIndexSoundMapping[whiteKeyNum] === props.noteSelected ? whiteKeyElementPressedStyle : whiteKeyElementNormalStyle}></div>
        ))}
        <BlackKeyElementOverlayContainer></BlackKeyElementOverlayContainer>
    </div>)
}

export default KeyboardGUI;