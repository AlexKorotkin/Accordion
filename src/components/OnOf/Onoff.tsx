import React, {useState} from "react";

type OnoffPropsType = {
    on: boolean
    setOn: (value: boolean) => void
}

export function Onoff(props: OnoffPropsType){


        const onStyle = {
            margin: '1px',
            display: 'inline-block',
            padding: '5px 13px',
            border: '1px solid black',
            borderRadius: '2px',
            color: props.on ? 'white' : 'black',
            backgroundColor: props.on ? 'green' : ''
        }
        const offStyle = {
            margin: '1px',
            display: 'inline-block',
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '2px',
            backgroundColor: props.on ? '' : 'red',
            color: props.on ? 'black' : 'white'
        }
        const indicatorStyle = {
            margin: '1px',
            display: 'inline-block',
            padding: '7px',
            border: '1px solid black',
            borderRadius: '50%',
            backgroundColor: props.on ? 'green' : 'red'
        }

    return (
        <div>
             <button onClick={() => {props.setOn(true)}} style={onStyle}>ON</button>
            <button onClick={() => {props.setOn(false)}} style={offStyle}>OFF</button>
            <div style={indicatorStyle}></div>
        </div>

    )
}

