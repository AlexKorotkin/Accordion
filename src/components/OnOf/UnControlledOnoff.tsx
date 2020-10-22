import React, {useState} from "react";

type UnControlledOnoffPropsType = {
    titleOn: string
    titleOff: string
    defaultOn: boolean
}

export function UnControlledOnoff(props:UnControlledOnoffPropsType){

    let[on, setOn] = useState(props.defaultOn ? props.defaultOn: false)
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
        let onClicked = () => {setOn(true)}
        let offClicked = () => {setOn(false)}
    return (
        <div>
            <button onClick={onClicked} style={onStyle}>{props.titleOn}</button>
            <button onClick= {offClicked} style={offStyle}>{props.titleOff}</button>
            <div style={indicatorStyle}></div>
        </div>

    )
}

