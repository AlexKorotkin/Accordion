import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion

}
let callback = action('accordion change event fired');

export let MenuCollapsedMode = ()=> <Accordion titleValue={'Menu'} collapsed={true} seAccordionCollapsed={callback}/>
export let UsersUncollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={false} seAccordionCollapsed={callback}/>
export let ModeChanging = () => {
   let [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={'Users'} collapsed={value} seAccordionCollapsed={setValue}/>
}