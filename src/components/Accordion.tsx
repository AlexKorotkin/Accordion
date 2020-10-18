import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    seAccordionCollapsed: ()=> void
}
export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle collapsed = {props.collapsed} title = {props.titleValue} seAccordionCollapsed ={props.seAccordionCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}