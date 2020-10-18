import React from 'react';
type AccordionTitleType = {
    title: string
    collapsed: boolean
    seAccordionCollapsed: () => void
}
export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={()=> {props.seAccordionCollapsed()}}> {props.title}</h3>
    )
}