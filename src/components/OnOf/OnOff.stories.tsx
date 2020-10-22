import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Onoff} from "./Onoff";



export default {
    title: 'OnOff',
    component: Onoff

}
let callback = action('on or off clicked');
export let OnMode = ()=> <Onoff on={true} setOn={callback}/>
export let OffMode = ()=> <Onoff on={false} setOn={callback}/>
export let ModeChanging = () => {
   let [value, setValue] = useState<boolean>(false)
    return <Onoff on={value} setOn={setValue}/>
}