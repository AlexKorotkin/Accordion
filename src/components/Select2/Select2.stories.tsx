import React, {useState} from 'react';
import {Select2} from "./Select2";


export default {
    title: 'Select2',
    component: Select2

}


export let MenuCollapsedSelect2 = () => {

    let [value,setValue]= useState('1')
    let animalsArray = [
        {title: 'dog', value: '1'},
        {title: 'cat', value: '2'},
        {title: 'mouse', value: '3'},
        {title: 'bird', value: '4'}
    ]


    return <Select2 value={value}
                    items={animalsArray}
                    onChange={setValue}

    />
}
