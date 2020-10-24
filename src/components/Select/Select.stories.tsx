import React, {useState} from 'react';
import {Select} from "./Select";



export default {
    title: 'Select',
    component: Select

}


export let MenuCollapsedSelect = () => {
    let [on, setOn] = useState<boolean>(false)
    let [value, setValue] = useState<string>('Menu')
    let [collapsed, setCollapsed] = useState<boolean>(true)

    let animalsArray = [
        {title: 'dog', value: 1},
        {title: 'cat', value: 2},
        {title: 'mouse', value: 3},
        {title: 'bird', value: 4}
        ]

    let onChange = (animalsValue:number)=> {
        let changeValue = animalsArray.find(i => i.value === animalsValue )
            if (changeValue){
                setValue(changeValue.title)
                setCollapsed(!collapsed)
            }
    }


    return <Select value={value}
                   on={on}
                   setOn={setOn}
                   onChange={onChange}
                   items={animalsArray}
                   setCollapsed = {setCollapsed}
                   collapsed={collapsed}/>
}
