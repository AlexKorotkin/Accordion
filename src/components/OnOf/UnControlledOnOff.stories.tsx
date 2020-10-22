import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnoff} from "./UnControlledOnoff";



export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnoff

}
export let ModeOn = () => {
    return <UnControlledOnoff titleOn={'ON'}  titleOff={'OFF'} defaultOn={true}/>
}
export let ModeOff = () => {
    return <UnControlledOnoff titleOn={'ON'}  titleOff={'OFF'} defaultOn={false}/>
}
export let BugMod = () => {

    return <div>Unsync when defaultValue when already rendered</div>
}