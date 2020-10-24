import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Onoff} from "./OnOf/Onoff";


export default {
    title: 'input',
    component: Onoff

}

export let GetValueUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState('')
    let inputRef = useRef<HTMLInputElement>(null)
    let save = () => {
        let inputValue = inputRef.current as HTMLInputElement
        setValue(inputValue.value)
    }

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={save}>x</button>
            {value}
        </div>
    )
}
export let TrackValueUncontrolledInput = () => {
    let [value, setValue] = useState('')
    let save = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={value} onChange={save} type="text"/>
            <button>{value}</button>
        </div>
    )
}

export let ControlledInputWithFixedValue = () => <input value={'good'}/>

export let ControlledInput = () => {
    let [parent, setParent] = useState('')
    let onChange = (e: ChangeEvent<HTMLInputElement>) => setParent(e.currentTarget.value)
    return <input onChange={onChange} type="text"/>
}
export let ControlledChacked = () => {
    let [parent, setParent] = useState(false)
    let onChange = (e: ChangeEvent<HTMLInputElement>) => setParent(e.currentTarget.checked)
    return <input checked={parent} onChange={onChange} type='checkbox'/>
}

export let ControlledSelect = () => {
    let [parent, setParent] = useState<string|undefined>('2')
    let onChange = (e: ChangeEvent<HTMLSelectElement>) => setParent(e.currentTarget.value)
    return (
        <select value={parent} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Dog</option>
            <option value={'2'}>Cat</option>
            <option value={'3'}>Mouse</option>
        </select>

    )

}
