import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemsType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (value:number)=>void
    seAccordionCollapsed: (value: boolean)=> void
    items: Array<ItemsType>
}
export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle collapsed = {props.collapsed} title = {props.titleValue} seAccordionCollapsed ={props.seAccordionCollapsed}/>
            {!props.collapsed && <AccordionBody items = {props.items} onClick ={props.onClick}/>}
        </div>

    )
}