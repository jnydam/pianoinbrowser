import React, { useState } from 'react';
import KeyboardGUI from '../KeyboardGUI/KeyboardGUI';

import styles from './MainLayoutComp.module.css';

import { happyBirthdaySongData } from '../../util/songsmappings/HappyBirthdaySong';

import * as Tone from 'tone';

const MainLayoutComp = (props) => {

    const [ songNoteSelected, setSongNoteSelected ] = useState(undefined);


    const handlePlaySong = () => {

        const tempoFactor = 1;


        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        const clock = new Tone.Clock((time) => {

            const noteValue = happyBirthdaySongData[time - now];

            if (noteValue !== undefined) {
                console.log(noteValue);

                setSongNoteSelected(noteValue);
            }

            if (time === now + 14) {

                setSongNoteSelected(undefined);
            }

        }, 8);
        

        clock.start(now);
        clock.stop('+15');

        console.log("Beginning time");
        console.log(now);
        console.log("Ending tiem");


        synth.envelope.attack = 0.4;
        synth.envelope.decay = 0.5;
        synth.envelope.sustain = 0.2;
        synth.envelope.release = 0.8;

        synth.volume.value = -3;


        synth.triggerAttackRelease("C4", 0.125, now);
        synth.triggerAttackRelease("C4", 0.06, now + 0.375 * tempoFactor);
        synth.triggerAttackRelease("D4", 0.125, now + 0.5 * tempoFactor);
        synth.triggerAttackRelease("C4", 0.125, now + 1 * tempoFactor);
        synth.triggerAttackRelease("F4", 0.125, now + 1.5 * tempoFactor);
        synth.triggerAttackRelease("E4", 0.125, now + 2 * tempoFactor);

        synth.triggerAttackRelease("C4", 0.125, now + 3 * tempoFactor);
        synth.triggerAttackRelease("C4", 0.06, now + 3.375 * tempoFactor);
        synth.triggerAttackRelease("D4", 0.125, now + 3.5 * tempoFactor);
        synth.triggerAttackRelease("C4", 0.125, now + 4.0 * tempoFactor);
        synth.triggerAttackRelease("G4", 0.125, now + 4.5 * tempoFactor);
        synth.triggerAttackRelease("F4", 0.125, now + 5.0 * tempoFactor);

        synth.triggerAttackRelease("C4", 0.125, now + 6 * tempoFactor);
        synth.triggerAttackRelease("C4", 0.06, now + 6.375 * tempoFactor);
        synth.triggerAttackRelease("C5", 0.125, now + 6.5 * tempoFactor);
        synth.triggerAttackRelease("A4", 0.125, now + 7 * tempoFactor);
        synth.triggerAttackRelease("F4", 0.125, now + 7.5 * tempoFactor);
        synth.triggerAttackRelease("E4", 0.125, now + 8 * tempoFactor);
        synth.triggerAttackRelease("D4", 0.125, now + 8.5 * tempoFactor);

        synth.triggerAttackRelease("Bb4", 0.125, now + 9.5 * tempoFactor);
        synth.triggerAttackRelease("Bb4", 0.06, now + 9.875 * tempoFactor);
        synth.triggerAttackRelease("A4", 0.125, now + 10.0 * tempoFactor);
        synth.triggerAttackRelease("F4", 0.125, now + 10.5 * tempoFactor);
        synth.triggerAttackRelease("G4", 0.125, now + 11.0 * tempoFactor);
        synth.triggerAttackRelease("F4", 0.125, now + 11.5 * tempoFactor);


    } 

    return (<div className={styles.mainLayoutCompContainer}>
        <div className={styles.outerControlBarHeaderContainer}>
            <button onClick={handlePlaySong}>Play song</button>
        </div>
        <div className={styles.mainKeyboardContainer}>
            <KeyboardGUI
                noteSelected={songNoteSelected}></KeyboardGUI>
        </div>
    </div>)
}

export default MainLayoutComp;