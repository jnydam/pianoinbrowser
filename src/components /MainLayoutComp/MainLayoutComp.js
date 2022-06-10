import React, { useState } from 'react';
import KeyboardGUI from '../KeyboardGUI/KeyboardGUI';

import styles from './MainLayoutComp.module.css';

import * as Tone from 'tone';

const MainLayoutComp = (props) => {

    const [ cNoteSelected, setCNoteSelected ] = useState(false);


    const handlePlaySong = () => {

        const tempoFactor = 1;

        const clock = new Tone.Clock((time) => {

            console.log("clock tick");
            console.log(time);

            if (time === 0.1) {
                console.log("Start note!");
                setCNoteSelected(true);
            } else {
                setCNoteSelected(false);
            }

        }, 1);
        

        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        clock.start(now);

        synth.envelope.attack = 0.4;
        synth.envelope.decay = 0.5;
        synth.envelope.sustain = 0.2;
        synth.envelope.release = 0.8;

        synth.volume.value = -3;


        synth.triggerAttackRelease("C4", 0.125, now);
        synth.triggerAttackRelease("C4", 0.06, now + 0.375 * tempoFactor);
        synth.triggerAttackRelease("D4", 0.125, now + 0.5 * tempoFactor);
        synth.triggerAttackRelease("C4", 0.125, now + 1 * tempoFactor);
        synth.triggerAttackRelease("F4", "16n", now + 1.5 * tempoFactor);
        synth.triggerAttackRelease("E4", "16n", now + 2 * tempoFactor);

        synth.triggerAttackRelease("C4", "16n", now + 3 * tempoFactor);
        synth.triggerAttackRelease("C4", "16n", now + 3.375 * tempoFactor);
        synth.triggerAttackRelease("D4", "16n", now + 3.5 * tempoFactor);
        synth.triggerAttackRelease("C4", "16n", now + 4.0 * tempoFactor);
        synth.triggerAttackRelease("G4", "16n", now + 4.5 * tempoFactor);
        synth.triggerAttackRelease("F4", "16n", now + 5.0 * tempoFactor);

        synth.triggerAttackRelease("C4", "16n", now + 6 * tempoFactor);
        synth.triggerAttackRelease("C4", "16n", now + 6.375 * tempoFactor);
        synth.triggerAttackRelease("C5", "16n", now + 6.5 * tempoFactor);
        synth.triggerAttackRelease("A4", "16n", now + 7 * tempoFactor);
        synth.triggerAttackRelease("F4", "16n", now + 7.5 * tempoFactor);
        synth.triggerAttackRelease("E4", "16n", now + 8 * tempoFactor);
        synth.triggerAttackRelease("D4", "16n", now + 8.5 * tempoFactor);


        console.log("We are playing a song here");
    } 

    return (<div className={styles.mainLayoutCompContainer}>
        <div className={styles.outerControlBarHeaderContainer}>
            <button onClick={handlePlaySong}>Play song</button>
            {cNoteSelected ? <span style={{backgroundColor: 'red'}}>hmmm</span> : null}
        </div>
        <div className={styles.mainKeyboardContainer}>
            <KeyboardGUI></KeyboardGUI>
        </div>
    </div>)
}

export default MainLayoutComp;