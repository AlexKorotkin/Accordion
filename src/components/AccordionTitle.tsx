import React from 'react';
type AccordionTitleType = {
    title: string
    collapsed: boolean
    seAccordionCollapsed: (value:boolean) => void
}
export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={()=> {props.seAccordionCollapsed(!props.collapsed)}}> {props.title}</h3>
    )
}