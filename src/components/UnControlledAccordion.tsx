import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
type UncontrolledAccordionPropsType = {
    titleValue: string

}
export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);
    let install = () => setCollapsed(!collapsed)
    return (
        <div>
            <AccordionTitle  title = {props.titleValue}/><button onClick={install}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>

    )
}