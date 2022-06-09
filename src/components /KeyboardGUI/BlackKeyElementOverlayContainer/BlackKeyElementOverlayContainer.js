import React from 'react';
import BlackKeyElementComp from './BlackKeyElementComp/BlackKeyElementComp';

import styles from './BlackKeyElementOverlayContainer.module.css';
import OuterSpacerKeyElementComp from './OuterSpacerKeyElementComp/OuterSpacerKeyElementComp';
import InnerSpacerKeyElementComp from './InnerSpacerKeyElementComp/InnerSpacerKeyElementComp';
import EndingSpacerKeyElementComp from './EndingSpacerKeyElementComp/EndingSpacerKeyElementComp';

import { blackKeyIndexSoundMapping } from '../../../util/SoundIndexMappings';

import * as Tone from 'tone';

const BlackKeyElementOverlayContainer = (props) => {


    const handleBlackKeyPress = (keyId) => {


        const synth = new Tone.Synth().toDestination();

        synth.triggerAttackRelease(blackKeyIndexSoundMapping[keyId], "8n", Tone.context.currentTime);
    }

    return (<div className={styles.blackKeyElementOverlayContainerStyle}>
        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={0}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={1}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>
        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={2}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={3}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={4}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>
        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={5}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={6}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>
        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={7}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={8}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>

        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={9}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>
        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>
        <OuterSpacerKeyElementComp></OuterSpacerKeyElementComp>

        <BlackKeyElementComp
            keyId={10}
            onBlackKeyPress={handleBlackKeyPress}></BlackKeyElementComp>
        <InnerSpacerKeyElementComp></InnerSpacerKeyElementComp>

        <EndingSpacerKeyElementComp></EndingSpacerKeyElementComp>
        
    </div>)

}

export default BlackKeyElementOverlayContainer;