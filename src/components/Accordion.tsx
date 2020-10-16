import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
type AccordionType = {
    title: string
}
export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title = {props.title}/>
            <AccordionBody/>
        </div>

    )
}