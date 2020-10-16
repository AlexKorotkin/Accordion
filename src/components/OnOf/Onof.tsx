import React from "react";

type OnoffPropsType = {
    status: boolean
    addValue: () => void
}

export function Onoff(props: OnoffPropsType){


    return (
        <div>
            <div onClick={() => {props.addValue()}} className={`item  ${props.status ? 'red' : ''}`}>ON</div>
            <div onClick={() => {props.addValue()}} className={`item  ${!props.status ? 'green' : ''}`}>OFF</div>
            <div className={`item round ${props.status ? 'red' : 'green'}`}></div>
        </div>

    )
}

