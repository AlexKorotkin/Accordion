import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion

}
let callback = action('accordion change event fired');

export let MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                collapsed={true}
                                                seAccordionCollapsed={callback}
                                                onClick ={x=>x}
                                                items={[{title: 'dog', value: 1},{title: 'cat', value: 2},{title: 'mouse', value: 3},{title: 'bird', value: 4}]}

/>

export let UsersUncollapsedMode = () => <Accordion titleValue={'Users'}
                                                   collapsed={false}
                                                   seAccordionCollapsed={callback}
                                                   onClick ={x=>x}
                                                   items={[{title: 'dog', value: 1},{title: 'cat', value: 2},{title: 'mouse', value: 3},{title: 'bird', value: 4}]}
/>
export let ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onClick ={x=>x}
                      seAccordionCollapsed={setValue}
                      items={[{title: 'dog', value: 1},{title: 'cat', value: 2},{title: 'mouse', value: 3},{title: 'bird', value: 4}]}
    />
}