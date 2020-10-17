import React from "react";

type OnoffPropsType = {
    on: boolean
    addValue: () => void
}

export function Onoff2(props: OnoffPropsType){


    return (
        <div>
            <div onClick={() => {props.addValue()}} className={`item  ${props.on ? 'red' : ''}`}>ON</div>
            <div onClick={() => {props.addValue()}} className={`item  ${!props.on ? 'green' : ''}`}>OFF</div>
            <div className={`item round ${props.on ? 'red' : 'green'}`}></div>
        </div>

    )
}

