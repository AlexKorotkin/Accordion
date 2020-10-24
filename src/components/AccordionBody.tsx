import React from 'react';
import {ItemsType} from "./Accordion";

export type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick:(value: number)=>void
}

export function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((i,index) => <li onClick={()=>props.onClick(i.value)} key={index} >{i.title}</li> )
            }
        </ul>
    )
}