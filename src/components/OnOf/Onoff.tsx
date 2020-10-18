import React, {useState} from "react";

/*type OnoffPropsType = {
    on: boolean

}*/

export function Onoff(){

    let[on, setOn] = useState(false)
        const onStyle = {
            margin: '1px',
            display: 'inline-block',
            padding: '5px 13px',
            border: '1px solid black',
            borderRadius: '2px',
            color: on ? 'white' : 'black',
            backgroundColor: on ? 'green' : ''
        }
        const offStyle = {
            margin: '1px',
            display: 'inline-block',
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '2px',
            backgroundColor: on ? '' : 'red',
            color: on ? 'black' : 'white'
        }
        const indicatorStyle = {
            margin: '1px',
            display: 'inline-block',
            padding: '7px',
            border: '1px solid black',
            borderRadius: '50%',
            backgroundColor: on ? 'green' : 'red'
        }

    return (
        <div>
            {/*<div onClick={() => {props.addValue()}} className={`item  ${props.on ? 'red' : ''}`}>ON</div>
            <div onClick={() => {props.addValue()}} className={`item  ${!props.on ? 'green' : ''}`}>OFF</div>
            <div className={`item round ${props.on ? 'red' : 'green'}`}></div>*/}
            <button onClick={() => {setOn(true)}} style={onStyle}>ON</button>
            <button onClick={() => {setOn(false)}} style={offStyle}>OFF</button>
            <div style={indicatorStyle}></div>
        </div>

    )
}

